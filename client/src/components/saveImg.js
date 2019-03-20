import React from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';

class SaveImg extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {
			categoryName: "",
			imgURL: this.props.imgURL
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = (event) => {
		// const target = event.target.value;
  //   const {name,value} = event.target
	// 	this.setState({[name]:value}, () => {
	// 		console.log(this.state);
	// });

	this.setState({value: event.target.value}, function () {
    console.log(this.state);
	
	});

}

  handleSubmit = (event) => {

		event.preventDefault();

		console.log(this.state);

		axios.post('/api/looks', this.state)
		.then( (res) => {
			alert("Image saved.");

			//close modal

		})
		.catch((err) => {
			alert("Image not saved. Please try again.");
		});
  
  }

  render() {

    return (
    	<Flexbox className="registration-page">
			<h1>Save this look?</h1>


      		<form onSubmit={this.handleSubmit}>

					<input name="imgURL" type="image" src={this.props.imgURL} value={this.props.imgURL} className="img-look" />
      			<select name="categoryName" onChange={this.handleChange}>
							<option value="selected">Please select a category:</option>
							<option value="day-looks">Day Looks</option>
			        <option value="night-looks">Night Looks</option>
			        <option value="creative-looks">Creative Looks</option>
			        <option value="cultural-looks">Cultural Looks</option>
		         </select>

				<input className="register-form" type="submit" value="save" />

			 </form>

	    </Flexbox>

    );
  }
}

export default SaveImg;