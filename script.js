
function updateWeather(ville) {
    const apiKey = "414f550b460063e8d5f1216f6e0c041a";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ville").textContent = data.name;
            document.getElementById("temperature").textContent = Math.round(data.main.temp - 273.15);
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("nebulosite-totale").textContent = data.clouds.all;
            document.getElementById("nebulosite-basse").textContent = data.clouds.low;
            document.getElementById("nebulosite-moyenne").textContent = data.clouds.mid;
            document.getElementById("nebulosite-haute").textContent = data.clouds.high;
            document.getElementById("humidite").textContent = data.main.humidity;

        })

        .catch(error => console.error(error));
}
