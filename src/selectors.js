import {createSelector} from "reselect";
import {SortingType} from './const';

export const getAuthorizationStatus = (state) => state.app.authorizationStatus;
export const getUser = (state) => state.user.userInfo;
const getOffers = (state) => state.app.allOffers;
const getSotingType = (state) => state.app.sortingType

const selectCityOffers = createSelector([getOffers], (offers, sortingType, city) => {
  const cityOffers = offers.filter((offer) => offer.city.name === city)

  switch (sortingType) {
    case SortingType.POPULAR:
      return cityOffers;
    case SortingType.HIGH_TO_LOW:
      return cityOffers.sort((firstOffer, nextOffer) => nextOffer.price - firstOffer.price)
    case SotringType.LOW_TO_HIGH:
      return cityOffers.sort((firstOffer, nextOffer) => firstOffer.price - nextOffer.price);

    case SotringType.TOP_RATED:
      return cityOffers.sort((firstOffer, nextOffer) => nextOffer.rating - firstOffer.rating);
  }
  return false;
})
