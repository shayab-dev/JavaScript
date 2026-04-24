const apiKey = '8bc18b8b4affe9f661740928ae9c1715';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore';

const searchBox = document.querySelector('.search input');

const searchBtn = document.querySelector('.search button');


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
}

searchBtn.addEventListner('click', function(){
  checkWeather(searchBtn.value);
});
