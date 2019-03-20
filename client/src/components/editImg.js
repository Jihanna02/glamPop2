import React from 'react';
import Flexbox from 'flexbox-react';
import request from 'superagent';

import '../css/Modal.css';

class SaveImg extends React.Component {
  
    state = {
    	
    };

  handleChange = (event) => {
    const target = event.target.value;

    const {name,value} = event.target
    this.setState({[name]:value});

  }

  handleSubmit = (event) => {
	 request
	  .post('/api/users')
	  .send(this.state) // sends a JSON post body
	  .end((err, res) => {
	    if(err){
	    	alert("Account not created. Please try again.")
	    } else if (res){
	    	alert("Account created. Welcome to GlamPop!");
	    }
	  });
	  
    event.preventDefault();
  }

  render() {

  	let data = sessionStorage.getItem('selected-img-url');

    return (
    	<Flexbox className="registration-page">
			<h1>Edit this look?</h1>


      		<form onSubmit={this.handleSubmit}>

      			<img src={data} className="img-look" />
      			<select name="categories">
			        <option value="day-looks">Day Looks</option>
			        <option value="night-looks">Night Looks</option>
			        <option value="creative-looks">Creative Looks</option>
			        <option value="cultural-looks">Cultural Looks</option>
		         </select>

				<input className="register-form" type="submit" value="save" />
			 </form>

			 	<button>Delete this look</button>

	    </Flexbox>

    );
  }
}

export default SaveImg;