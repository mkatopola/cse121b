// Fetch weather data from API
async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55305bde69d62637603df4efaf0207e4`);
    const data = await response.json();
    return data;
}

// Event listener for search button
document.getElementById("search-button").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    getWeatherData(city)
        .then(data => {
            // Convert temperature to Celsius
            const tempCelsius = data.main.temp - 273.15;
            // Using template literals to build strings
            const weatherInfo = `
            Country: ${data.sys.country}<br>
            City: ${data.name}<br>
            Weather: ${data.weather[0].main} (${data.weather[0].description})<br>
            Temperature: ${tempCelsius.toFixed(2)} °C<br>
            Pressure: ${data.main.pressure} hPa<br>
            Humidity: ${data.main.humidity} %<br>
            Cloudiness: ${data.clouds.all} %<br>
            Wind Speed: ${data.wind.speed} m/s`;
            // Display weather data in the DOM
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error:", error);
        });
});


