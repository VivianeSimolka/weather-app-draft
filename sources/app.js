// #1: display the current date and time using JavaScript: Tuesday 16:00

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${hours}`;
}

let currentDate = `${day} ${hours}:${minutes}`;
let date = document.querySelector("#current-date");
date.innerHTML = currentDate;

// #2: Add a search engine, when searching for a city (i.e. Paris),
//  display the city name on the page after the user submits the form.

let city = document.querySelector("h1");

function updateCity(event) {
  event.preventDefault();
  let selectedCity = document.querySelector("#floatingInput");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${selectedCity.value}`;
}

let form = document.querySelector("#city-choice");
form.addEventListener("submit", updateCity);

// #3: Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
// When clicking on it, it should convert the temperature to Fahrenheit.
// When clicking on Celsius, it should convert it back to Celsius.

function updateToCelcius() {
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = "9";
}

function updateToFahrenheit() {
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = "48";
}

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", updateToCelcius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", updateToFahrenheit);
