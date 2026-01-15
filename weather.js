let searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
let weatherclass = document.querySelector('.weather-icon');
let weatherInfo = document.querySelector('.weather');
let errorMessage = document.querySelector('.error');

async function checkWeather(city) {
  
  try {
    const response = await fetch("/api/weatherback" ,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city })
    });

    const data = await response.json();

    if (!response.ok) {
      weatherInfo.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.innerText = data.error || "City not found";
      return;
    }

    // display weather info
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%ss';

    let weatherCondition = data.weather[0].main;

    if (weatherCondition === 'Clear') {
      weatherclass.src = 'img/clear.PNG';
    } else if (weatherCondition === 'Clouds') {
      weatherclass.src = 'img/clouds.PNG';
    } else if (weatherCondition === 'Rain') {
      weatherclass.src = 'img/rain.PNG';
    } else if (weatherCondition === 'Snow') {
      weatherclass.src = 'img/snow.PNG';
    } else if (weatherCondition === 'Mist') {
      weatherclass.src = 'img/mist.PNG';
    } else if (weatherCondition === 'Drizzle') {
      weatherclass.src = 'img/drizzle.PNG';
    }

    weatherInfo.style.display = 'block';
    errorMessage.style.display = 'none';

  } catch (err) {
    weatherInfo.style.display = 'none';
    errorMessage.style.display = 'block';
    errorMessage.innerText = "Server error";
  }
}

// click event
searchButton.addEventListener('click', () => {
  const city = searchBox.value.trim();
  if (city) checkWeather(city);
});
