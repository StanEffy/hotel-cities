import React from "react";
import PropTypes from "prop-types";
import LocationsItem from "../LocationsItem/LocationsItem";
const LocationsList = (props) => {
  return (
    <ul className="locations__list tabs__list" cities={props.cities}>
      {props.cities.map((elem) => (
        <LocationsItem key={elem} city={elem}></LocationsItem>
      ))}
    </ul>
  );
};
LocationsList.propTypes = {
  cities: PropTypes.array,
};
export default LocationsList;
