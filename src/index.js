function updateTime(){

//London
let firstCityElement = document.querySelector("#first-city");
if(firstCityElement){
let firstCityDate = firstCityElement.querySelector(".date");
let firstCityTimeElement = firstCityElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
firstCityDate.innerHTML = londonTime.format("MMMM Do YYYY ");
firstCityTimeElement.innerHTML = londonTime.format("HH:mm:ss [<small>]A[</small>]");
}
//Tel Aviv
let secondCityElement = document.querySelector("#second-city");
if (secondCityElement){
let secondCityDate = secondCityElement.querySelector(".date");
let secondCityTimeElement = secondCityElement.querySelector(".time");
let telAvivTime = moment().tz("Asia/Tel_Aviv");
secondCityDate.innerHTML = telAvivTime.format("MMMM Do YYYY ");
secondCityTimeElement.innerHTML = telAvivTime.format("HH:mm:ss [<small>]A[</small>]");
}
// Melbourne
let thirdCityElement = document.querySelector("#third-city");
if (thirdCityElement){
let thirdCityDate = thirdCityElement.querySelector(".date");
let thirdCityTimeElement = thirdCityElement.querySelector(".time");
let melbourneTime = moment().tz("Australia/Melbourne");
thirdCityDate.innerHTML = melbourneTime.format("MMMM Do YYYY ");
thirdCityTimeElement.innerHTML = melbourneTime.format("HH:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    } 
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div "city">
    <h2>${cityName}</h2></div>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
<div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small></div>
<p> <a href="/"> Back Home </a></p>
    `;  
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change" , updateCity)

updateTime();
setInterval(updateTime, 1000);


