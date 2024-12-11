// List of districts in English
const districts = [
    "Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh",
    "Comilla", "Feni", "Noakhali", "Lakshmipur", "Cox's Bazar", "Bandarban", "Rangamati", 
    "Khagrachari", "Jamalpur", "Netrokona", "Sunamganj", "Habiganj", "Moulvibazar"
];

// OpenWeatherMap API credentials
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-button').addEventListener('click', () => {
    const district = document.getElementById('district-input').value.trim();

    if (!districts.includes(district)) {
        alert('Please enter a valid district name!');
        return;
    }

    fetch(`${apiBase}?q=${district},bd&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(() => alert('Failed to fetch weather data!'));
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    if (data.cod === 200) {
        weatherResult.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherResult.style.display = 'block';
    } else {
        alert('No weather data found for this district!');
    }
}
