const API_KEY = '923f4ea5a56f16809e096e7de206dec5';

function getWeather(){
    const location = document.getElementById('locationInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data)
    })
    .catch(error =>{
        console.error('Error fetching weather:', error)
    })
}

function displayWeather(data){
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>${data.name}</h2>
                            <p>Temperature: ${data.main.temp}°C</p>
                            <p>Description: ${data.weather[0].description}</p>`;
}
