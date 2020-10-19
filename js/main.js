//DOM Elements
const BROSWERSUPPORT = document.querySelector('.banner-support');
const mediaQuery = window.matchMedia('(max-width: 1200px)')

//Mobile Support
if (mediaQuery.matches) {
  document.querySelector('.icon').textContent = " ";
  document.querySelector('.temperature-degree').textContent = " ";
  document.querySelector('.temperature-description-bottom').textContent = " ";
  document.querySelector('.location-timezone').textContent = "Mobile site isn't supported yet.";  
}

//Warning Message: Supported Browser
function browseView() {
    BROSWERSUPPORT.style.display = 'none';
}

//Browser Support Banner Time Interval
setTimeout(() => {browseView();}, 5.0*1000);


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

   const proxyServer = "https://cors-anywhere.herokuapp.com/";
   const api = `${proxyServer}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

   fetch(api)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const { temperature, summary, icon } = data.currently;
   //Set DOM element from API
   temperatureDegree.textContent = temperature;
   temperatureDescription.textContent = summary;
   locationTimezone.textContent = data.timezone;
   
   //Formula for Celsius
   let celsius = (temperature - 32) * (5 / 9);
   //Set Icon
   setIcons(icon, document.querySelector(".icon"));

   //Change temperature to Celsius/Farenheit
   temperatureSection.addEventListener("click", () => {
   if (temperatureSpan.textContent === "F") {
    temperatureSpan.textContent = "C";
    temperatureDegree.textContent = Math.floor(celsius);
   } else {
    temperatureSpan.textContent = "F";
    temperatureDegree.textContent = temperature;
   }
  })

 });
});
} else {
 noLocation();
}
   
function noLocation() {
if(navigator.geolocation == undefined || navigator.geolocation == null){
 locationTimezone.textContent = "Please allow for the site to access your location to determine your specific location weather."
} else {
 console.log("Hello World");
}
}   
    
 function setIcons(icon, iconID){
 const skycons = new Skycons({color: "black"});
 const currentIcon = icon.replace(/-/g, "_").toUpperCase();
 skycons.play();
 return skycons.set(iconID, Skycons[currentIcon]);
}
  });
