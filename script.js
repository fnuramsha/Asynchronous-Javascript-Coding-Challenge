"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const currency = Object.values(data.currencies)[0].name;
  const languages = Object.values(data.languages);
  console.log(currency, languages);
  // Now add cards
  const html = `<article class="country" ${className}>
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        data.languages
      ).join(", ")}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
  
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmi = function (lat, lng) {
  return fetch(
    // `https://geocode.xyz/${lat},${lng}?geoit=json&auth=280979820488412507527x50367`
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  )
    .then((response) => response.json())

    .then((response) => {
      if (response.city.includes("Throttled")) {
        console.log(response);
        throw new Error("Throttling error is here");
      }

      console.log(`You're in ${response.city}, ${response.country}`);
      console.log(response);

      return fetch(
        `https://restcountries.com/v3.1/name/${response.country}`
      ).then((response) => response.json());
    })

    .then((res) => {
      console.log(res);

      const countryName = res[0].name.common;
      console.log(countryName); // This will log "Germany" to the console

      if (!countryName) throw new Error("Country not found");
      renderCountry(res[0]);
    })

    .catch((err) => console.error(`${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmi(52.508, 13.381);
whereAmi(19.037, 72.873);
whereAmi(-33.933, 18.474);
