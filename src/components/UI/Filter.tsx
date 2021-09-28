import React from "react";
import "./Filter.css";
import State from "../helpers/State";

const Filter = (props: object) => {
  const selectedStateHandler = (state: object, position: object) => {
    props.selectedState(state);
  };

  const updatePositionHandler = (position: object) => {
    props.updatePosition(position);
  };

  const selectedAcresHandler = (event: object) => {
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
        <option>&gt;100,000</option>
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
