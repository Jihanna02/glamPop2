import React, { Component } from "react";
import Flexbox from "flexbox-react";
import axios from "axios";

import "../css/Modal.css";

function ImageSaved() {
  return (
    <div className="registration-page">
      <h3>
        This image was saved. Please visit the saved page to review your looks.
      </h3>
    </div>
  );
}

function ImageEdit() {
  return (
    <div className="registration-page">
      <h3>This image was updated.</h3>
    </div>
  );
}

function ImageError() {
  return (
    <div className="registration-page">
      <h3>There was an error. Please try again.</h3>
    </div>
  );
}

function ImageDelete() {
  return (
    <div className="registration-page">
      <h3>This image was deleted.</h3>
    </div>
  );
}

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      imgURL: "",
      imgAlt: "",
      imgID: "",
      userID: this.props.userId
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
        imgURL: this.props.imgURL,
        imgAlt: this.props.imgAlt,
        imgID: this.props.imgID
      },
      function() {}
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    let message;

    if (this.props.imageAction === "save") {
      axios
        .post("/api/looks/", this.state)
        .then(res => {
          message = <ImageSaved />;
          this.props.updateState(message);
        })
        .catch(err => {
          message = <ImageError />;
          this.props.updateState(message);
        });
    } else if (this.props.imageAction === "edit") {
      axios
        .put(`/api/looks/update/${this.state.imgID}`, this.state)
        .then(res => {
          message = <ImageEdit />;
          this.props.updateState(message);
        })
        .catch(err => {
          message = <ImageError />;
          this.props.updateState(message);
        });
    }

    const resetForm = () => {
      document.getElementById("save-edit-form").reset();
    };

    resetForm();
  };

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

        <form
          id="save-edit-form"
          className="save-edit-form"
          onSubmit={this.handleSubmit}
        >
          <input
            name="imgURL"
            type="image"
            src={this.props.imgURL}
            value={this.props.imgURL}
            alt={this.props.imgAlt}
            className="img-look-modal"
            disabled
          />
          <select name="categoryName" onChange={this.handleChange} required>
            <option value="">Please select a category:</option>
            <option value="day-looks">Day Looks</option>
            <option value="night-looks">Night Looks</option>
            <option value="creative-looks">Creative Looks</option>
            <option value="cultural-looks">Cultural Looks</option>
          </select>

          <input className="register-form" type="submit" value="save" />

          <button
            className={buttonClasses}
            imgid={this.props.imgID}
            onClick={() => {
              let message;

              axios
                .delete(`/api/looks/delete/${this.props.imgID}`)
                .then(res => {
                  message = <ImageDelete />;
                  this.props.updateState(message);
                })
                .catch(function(err) {
                  message = <ImageError />;
                  this.props.updateState(message);
                });
            }}
          >
            Delete
          </button>
        </form>
      </Flexbox>
    );
  }
}

export default ImageCard;
