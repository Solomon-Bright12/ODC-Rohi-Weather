
const APIKEY = "f86aafa90268b66a9b14dc7c0374a2a5"
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(APIURL + city +`&appid=${APIKEY}`)
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    if( data.weather[0].main == "Clouds"){
        weatherIcon.src = "../weather/icons/cloud-removebg-preview.png"
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "../weather/icons/rain.png"
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "../weather/icons/sun.png"
    } 
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "../weather/icons/icons8-humidity-50.png"
    } 
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "../weather/icons/wind.png"
    } 
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "../weather/icons/snow.png"
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "../weather/icons/drizzle-100.png"
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "../weather/icons/icons8-mist-90.png"
    } 
    
    
}
searchbtn.addEventListener('click' ,()=>{
    checkweather(search.value);
    

})

