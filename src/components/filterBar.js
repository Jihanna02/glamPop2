import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";
 

class FilterBar extends Component {
  render() {
    return (

      <div className="FilterBar">
          <select name="filter">
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