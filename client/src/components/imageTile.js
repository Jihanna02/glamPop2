import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';

class ImageTile extends Component {
  
	constructor(props){
		super(props);
		this.state = {
			categoryName: "",
      imgURL: "",
      imgAlt: "",
      imgID: "",
      userID: sessionStorage.getItem("idNumber")
    };

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = (event) => {

    const {name,value} = event.target;

    this.setState({[name]:value, imgURL: this.props.imgURL, imgAlt: this.props.imgAlt, imgID: this.props.imgID}, function () {
    });

  }

  handleSubmit = (event) => {

    event.preventDefault();

    if (this.props.imageAction === "save") {
      axios.post('/api/looks/', this.state)
      .then( (res) => {
        alert("Image saved.");

      })
      .catch((err) => {
        alert("Image not saved. Please try again.");
      });

    } else if (this.props.imageAction === "edit") {

      axios.put(`/api/looks/update/${this.state.imgID}`, this.state)
      .then( (res) => {
        alert("Image updated.");

      })
      .catch((err) => {
        alert("Image not updated. Please try again.");
      });

    }

    const resetForm = () => {
      document.getElementById("save-edit-form").reset();
    };

    resetForm();
    
  }

  render() {

    let buttonClasses = "";

    if (this.props.imageAction === "save") {

      buttonClasses = "hidden";

    } else if (this.props.imageAction === "edit") {

      buttonClasses = "";

    }

    const {	categoryName, imgURL } = this.state;
    const isEnabled = categoryName.length > 0 && imgURL.length > 0;

    return (


    	<Flexbox className="registration-page">
			<h1>{this.props.imageAction} this look?</h1>

      		<form id="save-edit-form" onSubmit={this.handleSubmit}>

					<input name="imgURL" type="image" src={this.props.imgURL} value={this.props.imgURL} alt={this.props.imgAlt} className="img-look" disabled={true} />
      			<select name="categoryName" onChange={this.handleChange}>
							<option value="">Please select a category:</option>
							<option value="day-looks">Day Looks</option>
			        <option value="night-looks">Night Looks</option>
			        <option value="creative-looks">Creative Looks</option>
			        <option value="cultural-looks">Cultural Looks</option>
		         </select>

        <input className="register-form" type="submit" value="save" 
        disabled={!isEnabled}
        />

       <button className={buttonClasses} imgid={this.props.imgID} onClick={() => {

        axios.delete(`/api/looks/delete/${this.props.imgID}`)
        .then( (res) => {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });

        }}>Delete</button>
			 </form>

	    </Flexbox>

    );
  }
}

export default ImageTile;