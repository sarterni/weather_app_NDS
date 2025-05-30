<?php
// weather_api_proxy.php

// Étape 2: Définir la clé d'API
$apiKey = "bbe934017264521518f7481e7a99b9df";

// Étape 3: Recevoir le paramètre 'ville'
$ville = $_GET['ville'];

// Étape 4: Construire l'URL de l'API
$url = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($ville) . "&appid=" . $apiKey;
$url = "https://api.openweathermap.org/data/2.5/forecast?q=" . urlencode($ville) . "&appid=" . $apiKey;


// Étape 5: Faire la requête à l'API
$response = file_get_contents($url);

// Étape 6: Retourner le résultat
header('Content-Type: application/json');
echo $response;

?>
