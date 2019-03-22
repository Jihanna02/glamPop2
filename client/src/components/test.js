import React from 'react';
import Flexbox from 'flexbox-react';
import axios from 'axios';

import '../css/Modal.css';

class Test extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {
			categoryName: "",
			imgURL: ""
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = (event) => {
		const target = event.target.value;
    const {name,value} = event.target;

    //find a better way to do this
		this.setState({[name]:value}, () => {
      this.setState({imgURL:this.props.imgURL}, () => {});
    });

}

  handleSubmit = (event) => {

		event.preventDefault();
    
    if (this.props.imageAction === "save") {
      axios.post('/api/looks', this.state)
      .then( (res) => {
        alert("Image saved.");
        //close modal
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
  
  }

  render() {

    let buttonClasses = "";

    if (this.props.imageAction === "save") {

      buttonClasses = "hidden";

    } else if (this.props.imageAction === "edit") {

      buttonClasses = "";

    }

    return (
    	<Flexbox className="registration-page">
			<h1>{this.props.imageAction} this look?</h1>

      		<form onSubmit={this.handleSubmit}>

					<input name="imgURL" type="image" src={this.props.imgURL} value={this.props.imgURL} className="img-look" />
      			<select name="categoryName" onChange={this.handleChange}>
							<option value="">Please select a category:</option>
							<option value="day-looks">Day Looks</option>
			        <option value="night-looks">Night Looks</option>
			        <option value="creative-looks">Creative Looks</option>
			        <option value="cultural-looks">Cultural Looks</option>
		         </select>

				<input className="register-form" type="submit" value="save" />

			 </form>

       <button className={buttonClasses} onClick={() => {

       }}>Delete</button>

	    </Flexbox>

    );
  }
}

export default Test;