const searchInput = document.querySelector('#search-input');
const searchValue = "London";

var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=" + APIKey;

console.log(queryURL)

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);
        updateCurrentWeather(response);
        //updateForecast(response);
        }).catch(function(error) {
        console.error(error);
        });
      
      function updateCurrentWeather(data) {
        const city = data.city.name;
        //console.log(city);
        const date = new Date();
        //console.log(date);
        const icon = data.list[0].weather[0].icon;
        //console.log(icon);
        const temperature = data.list[0].main.temp;
        //console.log(temperature);
        const humidity = data.list[0].main.humidity;
        //console.log(humidity)
        const windSpeed = data.list[0].wind.speed;
        //console.log(windSpeed)
      
        }

      