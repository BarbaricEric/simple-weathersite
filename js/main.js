// Define Global Terms to use
window.addEventListener('load', ()=> {
 let long;
 let lat;
 const temperatureDescription = document.querySelector(".temperature-description");
 const temperatureDegree = document.querySelector(".temperature-degree");
 const locationTimezone = document.querySelector(".location-timezone");
 const temperatureSection = document.querySelector(".temperature");
 const temperatureSpan = document.querySelector(".temperature span");

 // Main Function
 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position => {
  long = position.coords.longitude;
  lat = position.coords.latitude;

   const proxyServer = 
   const api = 
    
  });
