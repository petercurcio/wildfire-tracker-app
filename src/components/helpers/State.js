import React from "react";

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
    lat: 32.806671,
    lng: -86.79113,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    lat: 61.370716,
    lng: -152.404419,
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    lat: 33.729759,
    lng: -111.431221,
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    lat: 34.969704,
    lng: -92.373123,
  },
  {
    name: "California",
    abbreviation: "CA",
    lat: 36.116203,
    lng: -119.681564,
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    lat: 39.059811,
    lng: -105.311104,
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    lat: 41.597782,
    lng: -72.755371,
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    lat: 39.318523,
    lng: -75.507141,
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
    lat: 38.897438,
    lng: -77.026817,
  },
  {
    name: "Florida",
    abbreviation: "FL",
    lat: 27.766279,
    lng: -81.686783,
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    lat: 33.040619,
    lng: -83.643074,
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    lat: 21.094318,
    lng: -157.498337,
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    lat: 44.240459,
    lng: -114.478828,
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    lat: 40.349457,
    lng: -88.986137,
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    lat: 39.849426,
    lng: -86.258278,
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    lat: 42.011539,
    lng: -93.210526,
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    lat: 38.5266,
    lng: -96.726486,
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    lat: 37.66814,
    lng: -84.670067,
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    lat: 31.169546,
    lng: -91.867805,
  },
  {
    name: "Maine",
    abbreviation: "ME",
    lat: 44.693947,
    lng: -69.381927,
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    lat: 39.063946,
    lng: -76.802101,
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    lat: 42.230171,
    lng: -71.530106,
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    lat: 43.326618,
    lng: -84.536095,
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    lat: 45.694454,
    lng: -93.900192,
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    lat: 32.741646,
    lng: -89.678696,
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    lat: 38.456085,
    lng: -92.288368,
  },
  {
    name: "Montana",
    abbreviation: "MT",
    lat: 46.921925,
    lng: -110.454353,
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    lat: 41.12537,
    lng: -98.268082,
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    lat: 38.313515,
    lng: -117.055374,
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    lat: 43.452492,
    lng: -71.563896,
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    lat: 40.298904,
    lng: -74.521011,
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    lat: 34.840515,
    lng: -106.248482,
  },
  {
    name: "New York",
    abbreviation: "NY",
    lat: 42.165726,
    lng: -74.948051,
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    lat: 35.630066,
    lng: -79.806419,
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    lat: 47.528912,
    lng: -99.784012,
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    lat: 40.388783,
    lng: -82.764915,
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    lat: 35.565342,
    lng: -96.928917,
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    lat: 44.572021,
    lng: -122.070938,
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    lat: 40.590752,
    lng: -77.209755,
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    lat: 41.680893,
    lng: -71.51178,
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    lat: 33.856892,
    lng: -80.945007,
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    lat: 44.299782,
    lng: -99.438828,
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    lat: 35.747845,
    lng: -86.692345,
  },
  {
    name: "Texas",
    abbreviation: "TX",
    lat: 31.054487,
    lng: -97.563461,
  },
  {
    name: "Utah",
    abbreviation: "UT",
    lat: 40.150032,
    lng: -111.862434,
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    lat: 44.045876,
    lng: -72.710686,
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    lat: 37.769337,
    lng: -78.169968,
  },
  {
    name: "Washington",
    abbreviation: "WA",
    lat: 47.400902,
    lng: -121.490494,
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    lat: 38.491226,
    lng: -80.954453,
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    lat: 44.268543,
    lng: -89.616508,
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    lat: 42.755966,
    lng: -107.30249,
  },
];

const State = (props) => {
  const selectedStateDropdownChangeHandler = (e) => {
    const state = states.find((state) => state.name === e.target.value);
    // console.log("State.js to Filter.js (selectedState) =>", state.abbreviation);
    props.selectedState(state.abbreviation);

    const position = [];
    position.push(state.lat);
    position.push(state.lng);
    // console.log("State.js to Filter.js (position) =>", position);
    props.position(position);
  };

  // console.log("State.js => RENDER");

  // const currentState = () => {
  //   states.forEach((state) => {
  //     if (state.abbreviation === props.defaultValue) {
  //       console.log("currentState:", state.name);
  //       return state.name;
  //     }
  //   });
  // };
  // console.log("State.js => selectedState:", currentState());
  return (
    <select onChange={selectedStateDropdownChangeHandler}>
      {states.map((state) => {
        return state.abbreviation === props.defaultValue ? (
          <option key={Math.random()} value={state.name} selected>
            {state.name}
          </option>
        ) : (
          <option key={Math.random()} value={state.name}>
            {state.name}
          </option>
        );
      })}
    </select>
  );
};

export default State;
