import React from "react";
import PropTypes from "prop-types";

const SortingItem = (props) => {
  const { itemName, isActive, onSortingClick } = props;
  const activeClassName = isActive ? `places__option--active` : ``;
  return (
    <li
      className={`places__option ${activeClassName}`}
      onClick={onSortingClick}
      tabIndex="0"
    >
      {itemName}
    </li>
  );
};
SortingItem.propTypes = {
  itemName: PropTypes.string,
  isActive: PropTypes.bool,
  onSortingClick: PropTypes.func,
};
export default SortingItem;
