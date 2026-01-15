let searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
let weatherclass = document.querySelector('.weather-icon');
let weatherInfo = document.querySelector('.weather');
let errorMessage = document.querySelector('.error');

console.log('hello blackoh')
async function checkWeather(city) {

  
  try {
    const response = await fetch('/api/weatherback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city }), // send city to backend
    });

    if (!response.ok) {
      // handle errors from backend
      const errData = await response.json();
      console.log('Error from backend:', errData);
      weatherInfo.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.textContent = errData.error || 'Something went wrong';
      return;
    }

    const data = await response.json();
    // populate weather info
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

    let weatherCondition = data.weather[0].main;

    if (weatherCondition === 'Clear') weatherclass.src = 'img/clear.PNG';
    else if (weatherCondition === 'Clouds') weatherclass.src = 'img/clouds.PNG';
    else if (weatherCondition === 'Rain') weatherclass.src = 'img/rain.PNG';
    else if (weatherCondition === 'Snow') weatherclass.src = 'img/snow.PNG';
    else if (weatherCondition === 'Mist') weatherclass.src = 'img/mist.PNG';
    else if (weatherCondition === 'Drizzle') weatherclass.src = 'img/drizzle.PNG';

    weatherInfo.style.display = 'block';
    errorMessage.style.display = 'none';
  } catch (err) {
    console.error('Network/server error:', err);
    weatherInfo.style.display = 'none';
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Network or server error';
  }
}

searchButton.addEventListener('click', () => {
  const userInput = searchBox.value.trim();
  if (userInput) checkWeather(userInput);
  searchBox.value = '';
});




// let searchBox =  document.querySelector('.search button').addEventListener('click', async function(){

//   try{
//     const res = await fetch("/api/test");
//     const data = await res.json();

//     console.log("fontend recieved:", data)
//   }catch(err){
//     console.error('Error:',err)
//   }
// })



























// let searchBox = document.querySelector('.search input');
// const searchButton = document.querySelector('.search button');
// let weatherclass = document.querySelector('.weather-icon');
// let weatherInfo = document.querySelector('.weather');
// let errorMessage = document.querySelector('.error');
// // console.log(errorMessage)

// async function checkWeather(city) {
//   try {
    
//     const response = await fetch("/pages/api/test" ,{
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ city })
      
//     });


//     // console.log()

   
    

//     const data = await response.json();


//     if (!response.ok) {
//       weatherInfo.style.display = 'none';
//       errorMessage.style.display = 'block';
//       errorMessage.innerText = data.error || "City not found";
//       console.log('theres an error ')
//       return;
//     }

//     // display weather info
//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
//     document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
//     document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

//     let weatherCondition = data.weather[0].main;

//     if (weatherCondition === 'Clear') {
//       weatherclass.src = 'img/clear.PNG';
//     } else if (weatherCondition === 'Clouds') {
//       weatherclass.src = 'img/clouds.PNG';
//     } else if (weatherCondition === 'Rain') {
//       weatherclass.src = 'img/rain.PNG';
//     } else if (weatherCondition === 'Snow') {
//       weatherclass.src = 'img/snow.PNG';
//     } else if (weatherCondition === 'Mist') {
//       weatherclass.src = 'img/mist.PNG';
//     } else if (weatherCondition === 'Drizzle') {
//       weatherclass.src = 'img/drizzle.PNG';
//     }

//     weatherInfo.style.display = 'block';
//     errorMessage.style.display = 'none';

//   } catch (err) {
//     weatherInfo.style.display = 'none';
//     errorMessage.style.display = 'block';
//     errorMessage.innerText = "Server error";
//   }
// }

// // click event
// searchButton.addEventListener('click', () => {
//   const city = searchBox.value.trim();
//   if (city) checkWeather(city);
// });






