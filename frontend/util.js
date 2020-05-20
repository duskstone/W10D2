const API = {
  getWeather(pos) {
    const xhr = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };

      xhr.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&appid=797b792ea6a25adfed6ed09ee98f5c3f`,
        true
      );
      xhr.send();
    });
  },
};

export default API;
