import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import Filter from "./components/UI/Filter";

const App = () => {
  //const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredFires, setFilteredFires] = useState(null);
  const [selectedState, setSelectedState] = useState("OR");
  const [selectedAcres, setSelectedAcres] = useState(1000);

  const [lat, setLat] = useState(44.0238);
  const [lng, setLng] = useState(-120.340898);
  const [zoom, setZoom] = useState(6);
  const [position, setPosition] = useState([lat, lng]);

  //console.log("App.js at top =>", selectedState);

  // console.log("App.js => RENDER");

  const STATE = selectedState;
  const API_REQUEST = `https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/CY_WildlandFire_Perimeters_ToDate/FeatureServer/0/query?where=irwin_POOState%20%3D%20'US-${STATE}'&outFields=*&outSR=4326&f=json`;

  // console.log("Before useEffect");

  useEffect(() => {
    fetch(API_REQUEST)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        //setData(data);
        // console.log("App.js in fetch");
        const filteredFires = [];
        data.features.forEach((fire, index) => {
          //const name = fire.attributes.irwin_IncidentName;
          const lat = fire.attributes.irwin_InitialLatitude;
          const long = fire.attributes.irwin_InitialLongitude;
          const acres = fire.attributes.poly_GISAcres;
          //const contained = fire.attributes.irwin_PercentContained;
          //console.log(index, name, lat, long);

          // if (lat && long && acres > 10000) {
          //   L.marker([lat, long])
          //     .bindPopup(
          //       `${name}<br />Acres: ${
          //         acres > 10000 ? acres.toLocaleString("en-US", { maximumFractionDigits: 0 }) : acres
          //       } <br />Contained: ${contained}%`
          //     )
          //     .addTo(mymap);
          // }

          if (lat && long && acres >= selectedAcres) {
            // console.log("App.js => filtering fires at minimum:", selectedAcres);
            filteredFires.push(fire);
          }
        });

        // console.log("During useEffect");

        //console.log(filteredFires);
        setFilteredFires(filteredFires);
      })
      .catch((error) => {
        // console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_REQUEST, selectedAcres]);

  // console.log("After useEffect");

  if (loading) return "Loading...";
  if (error) return "Error!";

  //console.log("filteredFires:", filteredFires);

  const selectedStateHandler = (state, position) => {
    // console.log("App.js => selectedState:", state);
    setSelectedState(state);
    setPosition(position);
  };

  const updatePositionHandler = (position) => {
    // console.log("App.js => position:", position);
    setPosition(position);
  };

  const selectedAcresHandler = (acres) => {
    // console.log("App.js => selectedAcres:", acres);
    setSelectedAcres(acres);
  };

  return (
    <div>
      {/* {console.log("***** RENDER *****")} */}
      {/* {console.log("App.js => selectedState:", selectedState)} */}
      {/* {console.log('App.js return => position:', position)} */}
      <Map position={position} zoom={zoom} fires={filteredFires} />
      <Filter
        defaultValue={selectedState}
        updatePosition={updatePositionHandler}
        selectedState={selectedStateHandler}
        selectedAcres={selectedAcresHandler}
      />
    </div>
  );
};

export default App;
