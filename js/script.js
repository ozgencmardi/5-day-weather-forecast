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
        $("#city").text(city);

        const date = new Date();
        const formattedDate = moment().format("D/M/YYYY");
        $("#date").text(`(${formattedDate})`);

        for (let i = 0; i < 6; i++) {
            iconUrl = "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
            //console.log(iconUrl);
            $(`#icon${[i]}`).attr("src", iconUrl);
            $(`#humidity${[i]}`).text(`Humidity: ${data.list[i].main.humidity}%`);
            $(`#wind${[i]}`).text(`Wind: ${data.list[i].wind.speed} KPH`);
            $(`#temp${[i]}`).text(`Temp: ${(Math.round(data.list[i].main.temp - 273.15))} °C`);
            $(`#date${[i]}`).text(`(${moment(date).add(i, 'days').format("D/M/YYYY")})`);
        }

    }

      