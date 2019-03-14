import React, { Component } from 'react';
// import { Fetch } from 'react-request';
import Flexbox from 'flexbox-react';
import request from 'superagent';

import Delete from './images/icon-delete.svg';

// const userID = window.sessionStorage.getItem(userID);
// console.log(userID);

class Api extends Component {
  state = {
    pics: [],
    pixObj:[],
    saved:[]
  }

  saveImg = () => {
    this.setState({saved:[this.img]})

   // request
   //  .post('/api/users/likes/' + userID)
   //  .send(this.state.saved) // sends a JSON post body
   //  .end((err, res) => {
   //    if(err){
   //      alert("failed.")
   //    } else if (res){
   //      alert("success!");
   //    }
   //  });

   console.log(this);
  }

  componentDidMount() {
    const day = [];
    const night = [];
    const creative = [];
    const cultural = [];

    request
      .get(`https://api.unsplash.com//users/jihanna02/collections?client_id=89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9`)
      .then( res => {
        console.log(res);
        res.body.map(obj => {
          request

            .get(`https://api.unsplash.com/collections/${obj.id}/photos?client_id=89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9`)
            .then( res => {
              console.log(res);
              const apiObject = res.body;
              console.log(apiObject); 
              this.setState({pixObj:[...this.state.pixObj, ...apiObject]})
              console.log(this.state)
          });
        })

      }).then(() => {
        
      });
}
    //whateverObj

    

  render() {
    let pix;
    if(this.state.pixObj){
      pix = this.state.pixObj.map((obj,i) => {
              return <div className="img-card">
              <img key={i} src={obj.urls.regular} alt='culture pic' className="img-look" />
              <img src={Delete} alt="like" className="img-icon" />
              </div>
            })
    }
    return(
        <div className="masonryApi">{pix}</div>
      );
  }

}

export default Api;