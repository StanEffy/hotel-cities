import {CHANGE_CITY, GET_OFFERS, SET_CITY_HOTELS, UPDATE_SORTING, RESORT_HOTELS} from "../actions"
import {ActionCreator} from '../action-creators'
import {SortingType} from "../../const"

export let initialState = {
  currentCity: 'Amsterdam',
  allOffers: [],
  currentCityHotels: [],
  sortingType: SortingType.POPULAR
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      console.log(state)
      return {
        ...state,
        currentCity: action.payload
      };
    case GET_OFFERS:
      return {
        ...state,
        allOffers: action.allOffers
      }
    case RESORT_HOTELS:
      return {
        ...state,
        currentCityHotels: [...action.payload]
      }
    case UPDATE_SORTING:
      return {
        ...state,
        sortingType: action.payload,
      }
    case SET_CITY_HOTELS:
      return {
        ...state,
        currentCityHotels: action.payload
      }
    default:
      return state;
  }
}


export const Operation = {
  loadAllOffers: () => (dispatch, _, api) => {
    let currentCity = _().app.currentCity;
    api.get(`/hotels`)
      .then(({data}) => {
        dispatch(ActionCreator.loadAllOffers(data));
        dispatch(ActionCreator.setCitiesHotels(data, currentCity))
      }).catch((err) => {
        throw err
      })
  }

}
