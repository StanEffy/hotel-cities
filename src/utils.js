export const getOffersByCity = (offers, city) => {
  return offers.slice().filter((offer) => offer.city.name === city)
}
