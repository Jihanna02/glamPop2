import React, * as react from 'react';

import axios from 'axios';
import { toJson } from "unsplash-js";

import Modal from './modal.js';
import ImageTile from './imageTile.js';

// const userID = window.sessionStorage.getItem(userID);
// console.log(userID);

class Gallery extends react.Component {
  state = {
    pics: [],
    pixObj:[],

    showModal:'none',
    content:''
  }

  _closeModal = () => {
    this.setState({showModal:'none'})
  }

  componentDidMount() {

		if(this.props.galleryType === "api"){

			const Unsplash = require('unsplash-js').default;
 
			const unsplash = new Unsplash({
				applicationId: "89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9",
				secret: "07f9578de6c18570497cac47d8fb2fc6c6559c8b34163720b059ac3ec7de4d6c"
			});
	
			unsplash.collections.getCollectionPhotos(1714447, 1, 30, "popular")
			.then(toJson)
			.then(json => {
        const apiObject = json;
        
        
        // alt_description


				this.setState({pixObj:[...this.state.pixObj, ...apiObject]});
  


			});

		} else if (this.props.galleryType === "database"){

			axios.get(`/api/looks`)
			.then( res => {
				
				const apiObject = res.data;
				this.setState({pixObj:[...this.state.pixObj, ...apiObject]});
	
			})
			.catch(function (error) {
				console.log(error);
			});
		}
  }

  render() {
    let pix;
    if(this.state.pixObj){
      pix = this.state.pixObj.map((obj,i) => {

				let imageURL = "";
        let imageIcon = "";
        let imageAltText = "";
        let imageAction = "";

				if (this.props.galleryType === "api") {
          imageURL = obj.urls.regular;
          imageAltText = obj.alt_description;
          imageIcon = require('../images/icon-heart.svg');
          imageAction = "save";

				} else if (this.props.galleryType === "database") {
          imageURL = obj.imgURL;
          imageAltText = obj.imgAlt;
          imageIcon = require('../images/icon-edit.svg');
          imageAction = "edit";

				}

        return <div  key={i} className="img-card" onClick={() => {
                
                this.setState({
                  showModal:'block',
                  content:<ImageTile imgURL={imageURL} imgAlt={imageAltText} imageAction={imageAction}/>
                });

                }}>
                
                <img key={i} src={imageURL} alt={imageAltText} className="img-look" /> 
                <img src={imageIcon} alt="like" className="img-icon" />

              </div>
            })
		}
		
    return(
      
        <div className="masonryApi">

          {pix}

          <Modal 
            showModal={this.state.showModal} 
            closeModal={this._closeModal} 
            content={this.state.content}
            autoClose={false}
          />
        </div>
      );
  }

}

export default Gallery;