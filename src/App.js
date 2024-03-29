import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import Filter from "./components/UI/Filter";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredFires, setFilteredFires] = useState(null);
  const [selectedState, setSelectedState] = useState("OR");
  const [selectedAcres, setSelectedAcres] = useState(1000);

  let lat = 44.0238;
  let lng = -120.340898;
  let zoom = 6;
  const [position, setPosition] = useState([lat, lng]);

  const STATE = selectedState;
  const API_REQUEST = `https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/CY_WildlandFire_Perimeters_ToDate/FeatureServer/0/query?where=irwin_POOState%20%3D%20'US-${STATE}'&outFields=*&outSR=4326&f=json`;

  useEffect(() => {
    fetch(API_REQUEST)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const filteredFires = [];
        data.features.forEach((fire, index) => {
          const lat = fire.attributes.irwin_InitialLatitude;
          const long = fire.attributes.irwin_InitialLongitude;
          const acres = fire.attributes.poly_GISAcres;

          if (lat && long && acres >= selectedAcres) {
            filteredFires.push(fire);
          }
        });

        setFilteredFires(filteredFires);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [API_REQUEST, selectedAcres]);

  // if (isLoading) return "Loading...";
  if (error) {
    console.error(error);
    return "Error: Please ensure you have JavaScript enabled in your browser.";
  }

  const selectedStateHandler = (state, position) => {
    setSelectedState(state);
    setPosition(position);
  };

  const updatePositionHandler = (position) => {
    setPosition(position);
  };

  const selectedAcresHandler = (acres) => {
    setSelectedAcres(acres);
  };

  return (
    <div>
      <Filter
        defaultValue={selectedState}
        updatePosition={updatePositionHandler}
        selectedState={selectedStateHandler}
        selectedAcres={selectedAcresHandler}
      />
      <Map
        isLoading={isLoading}
        position={position}
        zoom={zoom}
        fires={filteredFires}
      />
    </div>
  );
};

export default App;
