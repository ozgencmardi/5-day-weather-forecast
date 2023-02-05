const searchInput = document.querySelector('#search-input');
const searchValue = searchInput.value;

var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=" + APIKey;

//console.log(queryURL)
