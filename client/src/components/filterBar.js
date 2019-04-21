import React, { Component } from 'react';

class FilterBar extends Component {

    handleChange = (event) => {

    const {name,value} = event.target;

    this.setState({[name]:value, imgURL: this.props.imgURL, imgAlt: this.props.imgAlt, imgID: this.props.imgID}, function () {
    });

  }

  render() {
    return (

      <div className="FilterBar">
          <select name="filter" onChange={this.handleChange}>
            <option value="day-looks">All Looks</option>
            <option value="day-looks">Day Looks</option>
            <option value="night-looks">Night Looks</option>
            <option value="creative-looks">Creative Looks</option>
            <option value="cultural-looks">Cultural Looks</option>
          </select>
      </div>

    );
  }
}

export default FilterBar;