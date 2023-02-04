const API_KEY = "bd51d3ba07674224c94a1dc9cdfe9c1d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data=> {
        const weatherIcon = data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const city = document.querySelector("#weather span:first-child");
        const temperature = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");
        const weatherIconImg = document.querySelector("#weather img");
        weatherIconImg.setAttribute("src", weatherIconAdrs);
        city.innerText = data.name;
        temperature.innerText = `${data.main.temp}°`;
        weather.innerText = data.weather[0].main;

    }); //js가 url요청 ,promise
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 
