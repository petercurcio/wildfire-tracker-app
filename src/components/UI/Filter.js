import React from "react";
import "./Filter.css";
import State from "../helpers/State";

const Filter = (props) => {
  const selectedStateHandler = (state, position) => {
    // console.log("Filter.js to App.js (selectedState) => ****", state, "****");
    props.selectedState(state);
  };

  const updatePositionHandler = (position) => {
    // console.log("Filter.js to App.js (position) =>", position);
    props.updatePosition(position);
  };

  // console.log("Filter.js => RENDER");

  const selectedAcresHandler = (event) => {
    // console.log("Filter.js => selected Acres:", event.target.value);
    // console.log(event.target.value.replace(",", "").replace(/>?/g, ""));
    props.selectedAcres(event.target.value.replace(",", "").replace(/>?/g, ""));
  };

  return (
    <>
      <label>Acres:</label>
      <select onChange={selectedAcresHandler}>
        <option>1,000</option>
        <option>5,000</option>
        <option>10,000</option>
        <option>50,000</option>
        <option>100,000</option>
        <option>>100,000</option>
      </select>
      <label>State:</label>
      <State
        defaultValue={props.defaultValue}
        position={updatePositionHandler}
        selectedState={selectedStateHandler}
      />
    </>
  );
};

export default Filter;
