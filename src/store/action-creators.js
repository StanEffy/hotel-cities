import {SortingType} from "../const";
import {SET_USER_INFO, GET_OFFERS, IS_AUTH_REQUIRED, CHANGE_AUTH_STATUS, CHANGE_CITY, UPDATE_SORTING, SET_CITY_HOTELS, RESORT_HOTELS} from "./actions";

export const reSortHotels = (type, cityOffers) => {
  console.log(cityOffers)
  switch (type) {
    case SortingType.POPULAR:
      return cityOffers;
    case SortingType.HIGH_TO_LOW:
      return cityOffers.sort((firstOffer, nextOffer) => nextOffer.price - firstOffer.price)
    case SortingType.LOW_TO_HIGH:
      return cityOffers.sort((firstOffer, nextOffer) => firstOffer.price - nextOffer.price);
    case SortingType.TOP_RATED:
      return cityOffers.sort((firstOffer, nextOffer) => nextOffer.rating - firstOffer.rating);
    default:
      return cityOffers;
  }
}

export const ActionCreator = {
  loadAllOffers: (allOffers) => ({
    type: GET_OFFERS,
    allOffers
  }),
  authRequired: (status) => ({
    type: IS_AUTH_REQUIRED,
    payload: status
  }),
  setUserInfo: (data) => ({
    type: SET_USER_INFO,
    payload: data
  }),
  changeAuth: (bool) => ({
    type: CHANGE_AUTH_STATUS,
    payload: bool
  }),
  changeCity: (city) => ({
    type: CHANGE_CITY,
    payload: city
  }),
  updateSortingType: (sortingType) => ({
    type: UPDATE_SORTING,
    payload: sortingType
  }),
  setCitiesHotels: (allOffers, currentCity) => ({
    type: SET_CITY_HOTELS,
    payload: allOffers.filter((elem) => elem.city.name === currentCity)
  }),
  resortHotels: (sortType, curentCityHotels) => ({
    type: RESORT_HOTELS,
    payload: reSortHotels(sortType, curentCityHotels)
  })

}
