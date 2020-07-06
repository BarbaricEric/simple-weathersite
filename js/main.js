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

   //Formula for Celsius
   let celsius = (temperature - 32) * (5 / 9);
   //Set Icon
   setIcons(icon, document.querySelector(".icon"));

   //Change temperature to Celsius or Farenheit
   temperatureSection.addEventListener("click", () => {
   if (temperatureSpan.textContent === "F") {
    temperatureSpan.textContent = "C";
    temperatureDegree.textContent = Math.floor(celsius);
   } else {
    temperatureSpan.textContent = "F";
    temperatureDegree.textContent = temperature;
   }
  })
   
function noLocation() {
if(navigator.geolocation == undefined || navigator.geolocation == null){
 locationTimezone.textContent = "Please allow for the site to access your location to determine your specific location weather."
} else {
 console.log("Hello World");
}
}   
    
 function setIcons(icon, iconID){
 const skycons = new Skycons({color: "white"});
 const currentIcon = icon.replace(/-/g, "_").toUpperCase();
 skycons.play();
 return skycons.set(iconID, Skycons[currentIcon]);
}
  });
