import React from "react";
import Offer from "../Offer/Offer";
import PropTypes from "prop-types";
import PlacesList from "../PlacesList/PlacesList";
import CityMap from "../CityMap/CityMap";
import LocationsList from "../LocationsList/LocationsList";
import { connect } from "react-redux";
import Sorting from "../Sorting/Sorting";
import { ActionCreator } from "../../store/action-creators";

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

const MainScreen = (props) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cities={CITIES}></LocationsList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {props.cityHotels.length} places to stay in {props.currentCity}
              </b>
              <Sorting></Sorting>
              <PlacesList
                offers={props.offers}
                changeCity={props.changeCity}
              ></PlacesList>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap
                  offers={props.offers}
                  currentCity={props.currentCity}
                ></CityMap>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.array,
  currentCity: PropTypes.string,
  changeCity: PropTypes.func,
  cityHotels: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    offers: state.app.currentCityHotels,
    currentCity: state.app.currentCity,
    cityHotels: state.app.currentCityHotels,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeCity(city) {
      dispatch(ActionCreator.changeCity(city));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
