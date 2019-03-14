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
            <option value="day-looks"><Link to='/looks'>All Looks</Link></option>
            <option value="day-looks"><Link to='/looks/day-looks'>Day Looks</Link></option>
            <option value="night-looks"><Link to='/looks/night-looks'>Night Looks</Link></option>
            <option value="creative-looks"><Link to='/looks/creative-looks'>Creative Looks</Link></option>
            <option value="cultural-looks"><Link to='/looks/cultural-looks'>Cultural Looks</Link></option>
          </select>
      </div>

    );
  }
}

export default FilterBar;