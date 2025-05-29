<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./icons/icon512_maskable.png" type="image/x-png">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="css/HomePage.css?v=<?php echo filemtime('css/HomePage.css'); ?>">
    <title>Météo - Ma Ville</title>
</head>

<body>
    <img id="background_image" src="./img/weather_background_image.jpg" alt="">

    <div class="current-time">
        <p>Dernière actualisation : <span id="current-d"></span></p>
    </div>
    <div class="content">

        <h1>Météo - Ma Ville</h1>

        <div class="menu-ville">
            <label for="ville">Choisissez une ville:</label>
            <select id="ville" name="ville" onchange="updateWeather(this.value)">
                <option value="">Sélectionnez une ville</option>
                <option value="Vandœuvre-lès-Nancy">Vandœuvre-lès-Nancy</option>
                <option value="Gambsheim">Gambsheim</option>
                <option value="Strasbourg">Strasbourg</option>
                <option value="Paris">Paris</option>
                <option value="Lyon">Lyon</option>
                <option value="Marseille">Marseille</option>
                <option value="Bordeaux">Bordeaux</option>
            </select>
        </div>


        <p id="current-weather">Météo actuelle à <span id="ville-name"></span></p>
        <p>Température: <span id="temperature"></span> °C</p>
        <p>Description: <span id="description"></span></p>
        <p>Humidité: <span id="humidite"></span>%</p>

        <div id="nebulosite">
            <h2>Nébulosité</h2>
            <p>Total: <span id="nebulosite-totale"></span>%</p>
            <ul>
                <li>Basse: <span id="nebulosite-basse"></span>%</li>
                <li>Moyenne: <span id="nebulosite-moyenne"></span>%</li>
                <li>Haute: <span id="nebulosite-haute"></span>%</li>
            </ul>

            <p>Type de nuage: <span id="type-nuage"></span></p>
        </div>

        <div class="img-container">
            <p class="text" id="text-1">Image</p>
            <img id="weather-image" src="./img/black_square.png" alt="">
            <p class="text" id="text-2"></p>
        </div>
    </div>

    <div class="following-days-weather-days-table">
        <h2>Météo des prochains jours</h2>
        <div class="one-day-card-weather">
            <p class="day">Jour +1 <br> <span id="actualday-1"></span></p>
            <p>Température: <span id="temperature-d"></span> °C</p>
            <p>Description: <span id="day1-description"></span></p>
            <p>Humidité: <span id="day1-humidite"></span>%</p>
        </div>
        <div class="one-day-card-weather">
            <p class="day">Jour +2 <br> <span id="actualday-2"></span></p>
            <p>Température: <span id="day2-temperature"></span> °C</p>
            <p>Description: <span id="day2-description"></span></p>
            <p>Humidité: <span id="day2-humidite"></span>%</p>
        </div>
        <div class="one-day-card-weather">
            <p class="day">Jour +3 <br> <span id="actualday-3"></span></p>
            <p>Température: <span id="day3-temperature"></span> °C</p>
            <p>Description: <span id="day3-description"></span></p>
            <p>Humidité: <span id="day3-humidite"></span>%</p>
        </div>
        <div class="one-day-card-weather">
            <p class="day">Jour +4 <br> <span id="actualday-4"></span></p>
            <p>Température: <span id="day4-temperature"></span> °C</p>
            <p>Description: <span id="day4-description"></span></p>
            <p>Humidité: <span id="day4-humidite"></span>%</p>
        </div>
        <div class="one-day-card-weather">
            <p class="day">Jour +5 <br> <span id="actualday-5"></span></p>
            <p>Température: <span id="day5-temperature"></span> °C</p>
            <p>Description: <span id="day5-description"></span></p>
            <p>Humidité: <span id="day5-humidite"></span>%</p>
        </div>
    </div>

    <footer>
        <p>Projet réalisé par <a href="https://nicodigitalsstudio.com/">https://nicodigitalsstudio.com/</a> - 2024</p>
        <p>Version <span>V2</span></p>
    </footer>





    <script src="./script.js"></script>
</body>

</html>