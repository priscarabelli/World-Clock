function updateTime(){

//London
let firstCityElement = document.querySelector("#first-city");
let firstCityDate = firstCityElement.querySelector(".date");
let firstCityTimeElement = firstCityElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
firstCityDate.innerHTML = londonTime.format("MMMM Do YYYY ");
firstCityTimeElement.innerHTML = londonTime.format("H:mm:ss [<small>]A[</small>]");

//Tel Aviv
let secondCityElement = document.querySelector("#second-city");
let secondCityDate = secondCityElement.querySelector(".date");
let secondCityTimeElement = secondCityElement.querySelector(".time");
let telAvivTime = moment().tz("Asia/Tel_Aviv");
secondCityDate.innerHTML = telAvivTime.format("MMMM Do YYYY ");
secondCityTimeElement.innerHTML = telAvivTime.format("H:mm:ss [<small>]A[</small>]");

// Rio de janeiro
let thirdCityElement = document.querySelector("#third-city");
let thirdCityDate = thirdCityElement.querySelector(".date");
let thirdCityTimeElement = thirdCityElement.querySelector(".time");
let rioTime = moment().tz("Brazil/East");
thirdCityDate.innerHTML = rioTime.format("MMMM Do YYYY ");
thirdCityTimeElement.innerHTML = rioTime.format("H:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);