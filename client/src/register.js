import React from 'react';
import Flexbox from 'flexbox-react';
import request from 'superagent';

import './Modal.css';

class Register extends React.Component {
  
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
    return (
    	<Flexbox className="registration-page">
			<h1>Create your GlamPop account</h1>
      		<form onSubmit={this.handleSubmit}>

			  <input className="register-form" type="text" name="first_name"  placeholder="First Name"  onChange={(e) => this.handleChange(e)} required />
			  <input className="register-form" type="text" name="last_name"  placeholder="Last Name" onChange={(e) => this.handleChange(e)} required />
			  <input className="register-form" type="text" name="username"  placeholder="Username" onChange={(e) => this.handleChange(e)} required />
			  <input className="register-form" type="text" name="email"  placeholder="Email" onChange={(e) => this.handleChange(e)} required />
			  <input className="register-form" type="password" name="password"  placeholder="Password" onChange={(e) => this.handleChange(e)} required />
			  <input className="register-form" type="submit" value="Submit" />

			 </form>

	    </Flexbox>

    );
  }
}

export default Register;