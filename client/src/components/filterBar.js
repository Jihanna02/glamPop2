import React, { Component } from "react";

class FilterBar extends Component {
  render() {
    return (
      <select
        className="FilterBar"
        name="filter"
        onChange={e => {
          this.props.update(e.target.value);
        }}
      >
        <option value="all-looks">All Looks</option>
        <option value="day-looks">Day Looks</option>
        <option value="night-looks">Night Looks</option>
        <option value="creative-looks">Creative Looks</option>
        <option value="cultural-looks">Cultural Looks</option>
      </select>
    );
  }
}

export default FilterBar;
