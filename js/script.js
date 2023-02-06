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
        const formattedDate1 = moment(date).add(1, 'days').format("D/M/YYYY");
        const formattedDate2 = moment(date).add(2, 'days').format("D/M/YYYY");
        const formattedDate3 = moment(date).add(3, 'days').format("D/M/YYYY");
        const formattedDate4 = moment(date).add(4, 'days').format("D/M/YYYY");
        const formattedDate5 = moment(date).add(5, 'days').format("D/M/YYYY");

        $("#date").text(`(${formattedDate})`);
        $("#date1").text(`(${formattedDate1})`);
        $("#date2").text(`(${formattedDate2})`);
        $("#date3").text(`(${formattedDate3})`);
        $("#date4").text(`(${formattedDate4})`);
        $("#date5").text(`(${formattedDate5})`);


        for (let i = 0; i < 6; i++) {
            $(`#icon${[i]}`).text(data.list[i].weather[0].icon);
            $(`#humidity${[i]}`).text(`Humidity: ${data.list[i].main.humidity}%`);
            $(`#wind${[i]}`).text(`Wind: ${data.list[i].wind.speed} KPH`);
            $(`#temp${[i]}`).text(`Temp: ${(Math.round(data.list[i].main.temp - 273.15))} °C`);
        }

    }

      