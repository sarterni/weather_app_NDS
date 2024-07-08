function updateWeather(ville) {
    const apiKey = "414f550b460063e8d5f1216f6e0c041a";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ville-name").textContent = data.name; // Display city name
            document.getElementById("temperature").textContent = Math.round(data.main.temp - 273.15); // Round temperature
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("nebulosite-totale").textContent = data.clouds.all; // Display total cloudiness
            document.getElementById("humidite").textContent = data.main.humidity; // Display humidity
            document.getElementById("nebulosite-basse").textContent = data.clouds.low; // Display low cloudiness
            document.getElementById("nebulosite-moyenne").textContent = data.clouds.mid; // Display medium cloudiness
            document.getElementById("nebulosite-haute").textContent = data.clouds.high; // Display high cloudiness

            


            const weatherImage = document.getElementById("weather-image");
            const weatherDescription = document.getElementById("text-2");
            switch (data.weather[0].main) {
                case "Clear":
                    weatherImage.src = "description_clear_sky.jpg";
                    weatherDescription.textContent = "Ciel dégagé";
                    break;
                case "Clouds":
                    weatherImage.src = "description_overcast_clouds.jpg";
                    weatherDescription.textContent = "Ciel couvert";
                    break;
                case "Rain":
                    weatherImage.src = "images/rain.png";
                    break;
                case "light rain":
                    weatherImage.src = "images/rain.png";
                    break;
                case "moderate rain":
                    weatherImage.src = "images/rain.png";
                    break;

                case "Snow":
                    weatherImage.src = "images/snow.png";
                    break;

            }

        })
        .catch(error => console.error(error));
}
const d = new Date();
document.getElementById("current-d").innerHTML = d;
