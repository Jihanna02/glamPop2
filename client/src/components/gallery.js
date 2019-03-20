 import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import Modal from './modal.js';
import EditImg from './editImg.js';

import Delete from '../images/icon-delete.svg';


// const userID = window.sessionStorage.getItem(userID);
// console.log(userID);

class Gallery extends Component {
  state = {
    pics: [],
    pixObj:[],

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

    axios.get(`/api/looks`)
    .then( res => {
      
      const apiObject = res.data;
      this.setState({pixObj:[...this.state.pixObj, ...apiObject]});

    })
    .catch(function (error) {
      console.log(error);
    });

}

  render() {
    let pix;
    if(this.state.pixObj){

      pix = this.state.pixObj.map((obj,i) => {

        console.log(obj);

        return <div className="img-card" onClick={() => {
                
                this.setState({showModal:'block',content:<EditImg imgURL={obj.imgURL}/> });
                }}>
                
                <img key={i} src={obj.imgURL} alt='culture pic' className="img-look" />
                <img src={Delete} alt="like" className="img-icon" />
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

export default Gallery;