//defult location

getWeather("Cairo");

/*----catch input---*/
let serachLocation = document.getElementById("searchInp");
//console.log(serachLocation);

let forcastWeather = [];

async function getWeather(location) {
  let result = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=2ee8ee8996ac4e2888a143224221410&q=${location}&days=3`
  );

  let finalResult = await result.json();
  forcastWeather = finalResult;
  console.log(forcastWeather);

  displayData(forcastWeather);
}

serachLocation.addEventListener("keyup", function () {
  replaceLocation();
});

function replaceLocation() {
  let newLocation = serachLocation.value;
  if (newLocation.length >= 3) {
    getWeather(newLocation);
  }
}

/*-----display function -----*/
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function displayData(list) {
  console.log(list.forecast.forecastday[0].date);
  let day1 = new Date(list.forecast.forecastday[0].date);
  console.log(day1);
  let dayName1 = days[day1.getDay()];
  /*----*/
  let day2 = new Date(list.forecast.forecastday[1].date);
  let dayName2 = days[day2.getDay()];
  /*---*/
  let day3 = new Date(list.forecast.forecastday[2].date);
  let dayName3 = days[day3.getDay()];
  /*---*/
  let today = ` <div class="icon mb-2 text-white">
  <div class="d-flex align-items-center justify-content-between">
    <h3> ${dayName1} </h3>
    <span class="fs-5">${list.forecast.forecastday[0].date}</span>
  </div>
  <hr class="text-white">
  <h5 class="fs-4 fw-bolder text-danger">${list.location.name}</h5>
  <div class="d-flex justify-content-evenly align-items-center py-1">
    <h1 class="fw-bolder">${list.current.temp_c} <sup>o</sup>C</h1>
    <span><img src="https:${list.current.condition.icon}" alt="" width="90"></span></div>
</div>
<div class="content text-white">
  <h6 class="text-primary fs-4 pt-2">${list.current.condition.text}</h6>
  <div class="soccial_icons d-flex justify-content-start pt-3 ">
    <div class="icon px-2">
      <img src="img/img/icon-umberella.png" alt="">
      <span>20%</span>
    </div>
    <div class="icon px-2">
      <img src="img/img/icon-wind.png" alt="">
      <span>18km/h</span>
    </div>
    <div class="icon px-2">
      <img src="img/img/icon-compass.png"  alt="">
      <span>East</span>
    </div>
  </div>
</div>`;

  document.getElementById("container-today").innerHTML = today;

  let tomorrow = `<div class="icon mb-2 text-white">
  <h3 > ${dayName2}</h3>
  <hr class="text-white">
  <span><img src="https:${list.forecast.forecastday[1].day.condition.icon}" alt="" width="90"></span>
</div>
<div class="content text-white">
  <h2 class="fs-1">${list.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>C</h2>
  <h5 class="fs-5 py-2">${list.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C</h5>
  <h6 class="fs-4 text-primary">${list.forecast.forecastday[1].day.condition.text}</h6>
</div>`;

  document.getElementById("container-Tomorow").innerHTML = tomorrow;

  let nextTomorrow = `<div class="icon mb-2 text-white">
  <h3 > ${dayName3}</h3>
  <hr class="text-white">
  <span><img src="https:${list.forecast.forecastday[2].day.condition.icon}" alt="" width="90"></span>
</div>
<div class="content text-white">
  <h2 class="fs-1">${list.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C</h2>
  <h5 class="fs-5 py-2">${list.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C</h5>
  <h6 class="fs-4 text-primary">${list.forecast.forecastday[2].day.condition.text}</h6>
</div>`;

  document.getElementById("container-nextTomorow").innerHTML = nextTomorrow;
}
