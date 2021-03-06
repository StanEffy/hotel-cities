import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Offer = (props) => {
  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${props.id}`}>
          <img
            className="place-card__image"
            src={props.img}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${props.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${props.id}`}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number,
};

export default Offer;
