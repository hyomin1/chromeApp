function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat,long);
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

function a() {
    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 
