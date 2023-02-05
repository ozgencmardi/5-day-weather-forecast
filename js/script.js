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
        var formattedDate = moment().format("D/M/YYYY");
        //console.log(formattedDate);
        const icon = data.list[0].weather[0].icon;
        //console.log(icon);
        const temperature = data.list[0].main.temp;
        const temp = Math.round(temperature - 273.15);
        //console.log(temperature);
        const humidity = data.list[0].main.humidity;
        //console.log(humidity)
        const windSpeed = data.list[0].wind.speed;
        //console.log(windSpeed)
      
        $("#city").text(city);
        $("#date").text(`(${formattedDate})`);
        $("#icon").text(icon);
        $("#temp").text(`Temp: ${temp} °C`);
        $("#humidity").text(`Humidity: ${humidity}%`);
        $("#wind").text(`Wind: ${windSpeed} KPH`);

    }

      