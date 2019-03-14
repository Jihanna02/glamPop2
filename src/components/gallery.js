import React, { Component } from 'react';
// import { Fetch } from 'react-request';
import Flexbox from 'flexbox-react';
import request from 'superagent';

// import heart from './images/icon-heart.svg';
import edit from './images/icon-edit.svg';
import deleteIcon from './images/icon-delete.svg'

const userID = window.sessionStorage.getItem(userID);
// console.log(userID);

class Gallery extends Component {
  state = {
    pics: [],
    pixObj:[],
    saved:[]
  }

    componentDidMount() {
      request
        .get(`https://api.unsplash.com/collections/1714447/photos?client_id=89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9`)
        .then( res => {
          console.log(res);
          const apiObject = res.body;
          console.log(apiObject); 
          this.setState({pixObj:[...this.state.pixObj, ...apiObject]})
          console.log(this.state)
      });
}



//   componentDidMount() {
//     request
//     .get('/api/users/likes/' + userID)
//     .end((err, res) => {
//       console.log(res.body)
//       //console.logs empty likes array
//     });
// }
//     //whateverObj

    

  render() {
    let pix;
    if(this.state.pixObj){
      pix = this.state.pixObj.map((obj,i) => {
              return <div className="img-card">
              <img key={i} src={obj.urls.regular} alt='culture pic' className="img-look" />
              <img src={deleteIcon} alt="delete" className="img-icon" />
              </div>
            })
    }
    return(
        <div className="masonryDB">{pix}</div>
      );
  }

}

export default Gallery;