import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action-creators";
const LocationsItem = (props) => {
  const onCityClick = (e) => {
    e.preventDefault();
    props.changeCity(e.target.textContent);
    props.setSitiesHotels(props.offers, e.target.textContent);
  };

  return (
    <li className="locations__item">
      <a
        onClick={onCityClick}
        className={`locations__item-link tabs__item ${
          props.currentCity === props.city ? `tabs__item--active` : ``
        }`}
        href="#"
      >
        <span>{props.city}</span>
      </a>
    </li>
  );
};
LocationsItem.propTypes = {
  city: PropTypes.string,
  currentCity: PropTypes.string,
  changeCity: PropTypes.func,
  offers: PropTypes.array,
  setSitiesHotels: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    currentCity: state.app.currentCity,
    offers: state.app.allOffers,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeCity(city) {
      dispatch(ActionCreator.changeCity(city));
    },
    setSitiesHotels(offers, city) {
      dispatch(ActionCreator.setCitiesHotels(offers, city));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationsItem);
