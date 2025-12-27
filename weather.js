
const apiUrl =   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey ="7b9f9cfce5163e9e57934fc87e788b1b"
// // let cityname = 'lagos'    
// const citys = `q=${'lagos'}` 
// const apikey = Process.env.apikey

let searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
let weatherclass = document.querySelector('.weather-icon')
let weatherInfo = document.querySelector('.weather')
let errorMessage = document.querySelector('.error')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404 ){
        weatherInfo.style.display= 'none'
        errorMessage.style.display = 'block'
}else{
    var data = await response.json();

   document.querySelector('.city').innerHTML = data.name 
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
   document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'
   document.querySelector('.humidity').innerHTML = data.main.humidity + '%'

    console.log(data)

   
    let experiment = data.weather[0]
    let weatherCondition = experiment.main

    if(weatherCondition === 'Clear'){
        weatherclass.src = 'img/clear.PNG';
    }else if (weatherCondition === 'Clouds') {
         weatherclass.src = 'img/clouds.PNG'
    }else if (weatherCondition === 'Rain') {
         weatherclass.src = 'img/rain.PNG'
    }else if (weatherCondition === 'Snow') {
        weatherclass.src = 'img/snow.PNG'
    }else if(weatherCondition === 'Mist'){
         weatherclass.src = 'img/mist.PNG'
    }else if(weatherCondition === 'Drizzle'){
        weatherclass.src = 'img/drizzle.PNG'
    }
    //release the length of the infos since th response status is successful
    weatherInfo.style.display= 'block'
    errorMessage.style.display = 'none'
}

   
    // console.log(weatherCondition)
}

searchButton.addEventListener('click', ()=>{
    let userInput = searchBox.value
    searchBox.value = ''
    
    checkWeather(userInput)
})