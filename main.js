function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'bab281d79e5f1e9755a68d754cc313e7'; // API-Schlüssel hier einfügen
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.error('Fehler:', error));
}

function displayWeather(data) {
    const weatherOutput = document.getElementById('weather-output');
    if (data && data.weather && data.main) {
        weatherOutput.innerHTML = `
            <h2>Wetter in ${data.name}</h2>
            <p>Temperatur: ${data.main.temp} °C</p>
            <p>Beschreibung: ${data.weather[0].description}</p>
        `;

weatherOutput.style.display = 'block';


var weatherBackgrounds = {
    klar: "url('./klar.jpeg')",
    bewölkt: "url('./')",
    regen: "url('./regen.jpg')",
    hagel: "url('./hagel.jpg')",
    schnee: "url('./schnee.jpg')",
    gewitter: "url('./gewitter.jfif')",
    sonnig: "url('./sonnig.jpg')",
    trüb: "url('./trübgif')",
    
};

var weatherType = data.weather[0].main.toLowerCase();
var backgroundImage = weatherBackgrounds[weatherType] || "";

document.body.style.backgroundImage = backgroundImage;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
        weatherOutput.style.display = 'block'; // Ausgabe anzeigen
    } else {
        weatherOutput.innerHTML = `<p>Stadt nicht gefunden.</p>`;
        weatherOutput.style.display = 'block'; // Ausgabe anzeigen
    }
    weatherOutput.innerHTML = `<p>Stadt nicht gefunden.</p>`;
weatherOutput.style.display = 'block';
document.body.style.backgroundImage = "url('./falsch.png')";
}