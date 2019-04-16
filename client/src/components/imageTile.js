import React from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';

class ImageTile extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {
			categoryName: "",
      imgURL: "",
      imgAlt: ""
    };

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = (event) => {

    const {name,value} = event.target;

		this.setState({
      
      [name]:value}, () => {
        this.setState({
          imgURL:this.props.imgURL,
          imgAlt: this.props.imgAlt}, () => {});
    });

  }

  handleSubmit = (event) => {

    event.preventDefault();
    
    if (this.props.imageAction === "save") {
      axios.post('/api/looks', this.state)
      .then( (res) => {
        alert("Image saved.");

      })
      .catch((err) => {
        alert("Image not saved. Please try again.");
      });

    } else if (this.props.imageAction === "edit") {

      console.log(this.props.imgURL);

      axios.get(`/api/looks/imgURL/${this.props.imgURL}`)
      .then( (res) => {
        console.log(res.data);

      })
      .catch(function (err) {
        console.log(err);
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

				<input className="register-form" type="submit" value="save" disabled={!isEnabled}/>

			 </form>

       <button className={buttonClasses} onClick={() => {

       }}>Delete</button>

	    </Flexbox>

    );
  }
}

export default ImageTile;