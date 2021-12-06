import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SortingType } from "../../const";
import SortingItem from "../SortingItem/SortingItem";
import { ActionCreator } from "../../store/action-creators";

const sortingNames = Object.values(SortingType);

const Sorting = (props) => {
  const { onSortingClick, sortingType, updateSortingType, resortHotels } =
    props;
  const [isOpen, isOpenToggle] = useState(false);
  const openClassName = isOpen ? `places__options--opened` : ``;

  const sortingItemsElements = sortingNames.map((item, i) => (
    <SortingItem
      key={i}
      itemName={item}
      isActive={sortingType === item}
      onSortingClick={(evt) => {
        updateSortingType(evt.target.textContent);
        isOpenToggle(false);
        resortHotels(evt.target.textContent, props.offers);
      }}
    ></SortingItem>
  ));
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => isOpenToggle(!isOpen)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${openClassName}`}
      >
        {sortingItemsElements}
      </ul>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    sortingType: state.app.sortingType,
    offers: state.app.currentCityHotels,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateSortingType(sortingType) {
    dispatch(ActionCreator.updateSortingType(sortingType));
  },
  resortHotels(sortingType, hotels) {
    dispatch(ActionCreator.resortHotels(sortingType, hotels));
  },
});

Sorting.propTypes = {
  isOpen: PropTypes.bool,
  onSortingClick: PropTypes.func,
  sortingType: PropTypes.string,
  updateSortingType: PropTypes.func,
  offers: PropTypes.array,
  resortHotels: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
