import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import { connect } from "react-redux";
import { useEffect } from "react";

const cityCoordinate = {
  AMSTERDAM: { coordinates: [52.38333, 4.9] },
  BRUSSELS: { coordinates: [50.85045, 4.34878] },
  PARIS: { coordinates: [48.85341, 2.3488] },
  COLOGNE: { coordinates: [50.93333, 6.95] },
  HAMBURG: { coordinates: [53.550341, 10.000654] },
  DUSSELDORF: { coordinates: [51.22172, 6.77616] },
};

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
  }

  componentDidMount() {
    this._setMap();
  }

  componentDidUpdate() {
    this._map.remove();
    this._setMap();
    this._addPins();
  }

  _addPins() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [25, 30],
    });

    this.props.offers.map((element) => {
      element.city.name === this.props.currentCity
        ? leaflet
            .marker([element.location.latitude, element.location.longitude], {
              icon,
            })
            .addTo(this._map)
        : "";
    });
  }

  _setMap() {
    const city =
      cityCoordinate[this.props.currentCity.toUpperCase()].coordinates;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [25, 30],
    });
    const zoom = 13;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    this._map.setView(city, zoom);
    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(this._map);
    this.props.offers.map((element) => {
      element.city.name === this.props.currentCity
        ? leaflet
            .marker([element.location.latitude, element.location.longitude], {
              icon,
            })
            .addTo(this._map)
        : "";
    });
  }
  render() {
    return (
      <>
        <div id="map" style={{ height: "100%" }}></div>;
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    offers: state.app.allOffers,
    currentCity: state.app.currentCity,
  };
}
function mapDispatchToProps() {
  return {};
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityMap);
