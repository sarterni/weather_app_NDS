function updateWeather(ville) {
    const apiKey = "414f550b460063e8d5f1216f6e0c041a";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ville").textContent = data.name; // Display city name
            document.getElementById("temperature").textContent = Math.round(data.main.temp - 273.15); // Round temperature
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("nebulosite-totale").textContent = data.clouds.all; // Display total cloudiness
            document.getElementById("humidite").textContent = data.main.humidity; // Display humidity

        })
        .catch(error => console.error(error));
}
