"use strict";
const btn = document.querySelector(".btn-country");

const whereAmi = function (lat, lng) {
  return fetch(
    // `https://geocode.xyz/${lat},${lng}?geoit=json&auth=280979820488412507527x50367`
    // `https://geocode.xyz/${lat},${lng}?geoit=json`
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  )
    .then((response) => response.json())

    .then((response) => {
      debugger;
      if (response.city.includes("Throttled")) {
        console.log(response);
        throw new Error("Throttling error is here");
      }
      return response;
    })

    .then((res) => console.log(`You're in ${res.city}`))
    .catch((err) => console.log(`something went wrong ${err.message}`));
};

whereAmi(52.508, 13.381);
whereAmi(19.037, 72.873);
whereAmi(-33.933, 18.474);
whereAmi(-33.933, 18.474);
