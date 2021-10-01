import React from "react";
import "./Filter.css";
import State from "../helpers/State";

const Filter = (props) => {
  const selectedStateHandler = (state, position) => {
    props.selectedState(state);
  };

  const updatePositionHandler = (position) => {
    props.updatePosition(position);
  };

  const selectedAcresHandler = (event) => {
    props.selectedAcres(event.target.value.replace(",", "").replace(/>?/g, ""));
  };

  return (
    <div className="filter-wrapper">
      <div className="acres-filter">
        <label>Acres:</label>
        <select onChange={selectedAcresHandler}>
          <option>1,000</option>
          <option>5,000</option>
          <option>10,000</option>
          <option>50,000</option>
          <option>100,000</option>
          <option>&gt;100,000</option>
        </select>
      </div>
      <div className="state-filter">
        <label>State:</label>
        <State
          defaultValue={props.defaultValue}
          position={updatePositionHandler}
          selectedState={selectedStateHandler}
        />
      </div>
    </div>
  );
};

export default Filter;
