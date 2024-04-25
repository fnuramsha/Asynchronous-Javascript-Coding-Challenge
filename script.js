"use strict";

const whereAmi = function (lat, lng) {
  return fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=280979820488412507527x50367`
  )
    .then((response) => response.json())
    .then((res) => console.log(`You're in ${res.city}, ${res.country}`));
};

whereAmi(52.508, 13.381);
whereAmi(19.037, 72.873);
whereAmi(-33.933, 18.474);
