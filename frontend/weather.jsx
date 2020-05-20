import React from "react";
import API from "./util.js";

class Weather extends React.Component {
  //   constructor() {
  //       super()
  //   }

  componentDidMount() {
    let pos;
    navigator.geolocation.getCurrentPosition((geoLocation) => {
      const x = geoLocation.coords.latitude;
      const y = geoLocation.coords.longitude;
      pos = [x, y];
      API.getWeather(pos)
        .then((res) => JSON.parse(res.response))
        .then((json) => console.log(json))
        .catch((e) => console.log(e));
    });
  }

  render() {
    return <div />;
  }
}

export default Weather;
