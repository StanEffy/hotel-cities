import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PlacesList = (props) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((elem) => (
        <Offer
          id={elem.id}
          key={elem.id}
          title={elem.title}
          img={elem.preview_image}
          type={elem.appartmentType}
          price={elem.price}
          rating={elem.rating}
        />
      ))}
    </div>
  );
};
PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    offers: state.app.currentCityHotels,
  };
}
function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
