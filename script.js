function updateWeather(ville) {
    fetch(`weather_api_proxy.php?ville=${ville}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Affichage des informations météo
            document.getElementById("ville-name").textContent = data.name; // Nom de la ville
            document.getElementById("temperature").textContent = Math.round(data.main.temp - 273.15); // Température en °C
            document.getElementById("description").textContent = data.weather[0].description; // Description météo
            document.getElementById("nebulosite-totale").textContent = data.clouds.all; // Nébulosité totale
            document.getElementById("humidite").textContent = data.main.humidity; // Humidité
            // Les propriétés low, mid, high pour les nuages ne sont pas standard dans l'API OpenWeatherMap
            // Vous devez les calculer ou les obtenir d'une autre manière si elles existent
            // document.getElementById("nebulosite-basse").textContent = data.clouds.low;
            // document.getElementById("nebulosite-moyenne").textContent = data.clouds.mid;
            // document.getElementById("nebulosite-haute").textContent = data.clouds.high;

            // Affichage des prévisions météo
            const forecast = data.daily;

            // Affichage de la température du lendemain
            if (forecast && forecast.length > 1) { // Vérifier qu'il y a au moins deux jours de prévisions
                const temperatureCelsius = Math.round((forecast[1]?.temp?.day ?? 0) - 273.15);
                document.getElementById("temperature-d").textContent = `${temperatureCelsius}°C`;
            } else {
                document.getElementById("temperature-d").textContent = "N/A";
            }


            const weatherImage = document.getElementById("weather-image");
            const weatherDescription = document.getElementById("text-2");

            // Affichage de l'image météo et de la description
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
                case "light rain":
                case "moderate rain":
                    weatherImage.src = "images/rain.png";
                    weatherDescription.textContent = "Pluie";
                    break;
                case "Snow":
                    weatherImage.src = "images/snow.png";
                    weatherDescription.textContent = "Neige";
                    break;
                default:
                    weatherImage.src = "default_weather_image.jpg";
                    weatherDescription.textContent = data.weather[0].main;
                    break;
            }
        })
        .catch(error => console.error("Erreur : ", error));
}

// Mise à jour de la date actuelle
const d = new Date();
document.getElementById("current-d").innerHTML = d;

const nextDay = new Date();
nextDay.setDate(d.getDate() + 1);
document.querySelector("span#actualday-1").innerHTML = `${nextDay.getDate()} ${nextDay.toLocaleString('default', { month: 'long' })} ${nextDay.getFullYear()}`;

const nextDay2 = new Date();
nextDay2.setDate(d.getDate() + 2);
document.querySelector("span#actualday-2").innerHTML = `${nextDay2.getDate()} ${nextDay2.toLocaleString('default', { month: 'long' })} ${nextDay2.getFullYear()}`;

const nextDay3 = new Date();
nextDay3.setDate(d.getDate() + 3);
document.querySelector("span#actualday-3").innerHTML = `${nextDay3.getDate()} ${nextDay3.toLocaleString('default', { month: 'long' })} ${nextDay3.getFullYear()}`;

const nextDay4 = new Date();
nextDay4.setDate(d.getDate() + 4);
document.querySelector("span#actualday-4").innerHTML = `${nextDay4.getDate()} ${nextDay4.toLocaleString('default', { month: 'long' })} ${nextDay4.getFullYear()}`;

const nextDay5 = new Date();
nextDay5.setDate(d.getDate() + 5);
document.querySelector("span#actualday-5").innerHTML = `${nextDay5.getDate()} ${nextDay5.toLocaleString('default', { month: 'long' })} ${nextDay5.getFullYear()}`;
