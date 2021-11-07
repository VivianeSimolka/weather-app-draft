//  display the current date and time

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
  minutes = `0${minutes}`;
}

let currentDate = `${day} ${hours}:${minutes}`;
let date = document.querySelector("#current-date");
date.innerHTML = currentDate;

// when searching for a city, display the city name on the page after the user submits the form.

function showWeather(response) {
  let currentTemp = document.querySelector("#current-temp");
  let currentCity = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  currentCity.innerHTML = city;
  currentTemp.innerHTML = `${temperature}`;
}

function updateCity(event) {
  event.preventDefault();
  let selectedCity = document.querySelector("#floatingInput");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${selectedCity.value}`;
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value}&units=${unit}&appid=${apiKey}`;
  axios.get(apiURL).then(showWeather);
}

let form = document.querySelector("#city-choice");
form.addEventListener("submit", updateCity);

// show current weather location
function retrievePosition(position) {
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function updateLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let locateMe = document.querySelector("#locate-me");
locateMe.addEventListener("click", updateLocation);

// Update Celcius / Fahrenheit currently not working

function updateToCelcius(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");
  let city = "Berlin";
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiURL).then(showWeather);
}

function updateToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#current-temp");
  let city = "Berlin";
  console.log(city);
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let unit = "imperial";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showWeather);
}

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", updateToCelcius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", updateToFahrenheit);
