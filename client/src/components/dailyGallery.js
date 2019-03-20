 import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import Modal from './modal.js';
import SaveImg from './saveImg.js';

import Heart from '../images/icon-heart.svg';


// const userID = window.sessionStorage.getItem(userID);
// console.log(userID);

class DailyGallery extends Component {
  state = {
    pics: [],
    pixObj:[],
    saved:[],

    showModal:'none',
    content:''
  }

  //modal info
  _closeModal = () => {
      this.setState({showModal:'none'})
  }  

  componentDidMount() {
    const day = [];
    const night = [];
    const creative = [];
    const cultural = [];

    axios
      .get(`https://api.unsplash.com//users/jihanna02/collections?client_id=89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9`)
      .then( res => {
        res.body.map(obj => {
          axios

            .get(`https://api.unsplash.com/collections/${obj.id}/photos?client_id=89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9`)
            .then( res => {
              const apiObject = res.body;

              this.setState({pixObj:[...this.state.pixObj, ...apiObject]})

          });
        })

      }).then(() => {

      });
}

  render() {
    let pix;
    if(this.state.pixObj){
      pix = this.state.pixObj.map((obj,i) => {
        return <div className="img-card" onClick={() => {
                
                this.setState({showModal:'block',content:<SaveImg /> });

                sessionStorage.setItem('selected-img-url', obj.urls.regular);

                }}>
                <img key={i} src={obj.urls.regular} alt='culture pic' className="img-look" />
                <img src={Heart} alt="like" className="img-icon" />
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
          />
        </div>
      );
  }

}

export default DailyGallery;