let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=3467865&units=imperial&APPID=72772ba2e65b35bd012877ec696f26d2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () { 
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('AvgTemp').innerHTML = weatherData.main.temp_max;

    document.getElementById('SummaryConditions').innerHTML = weatherData.weather[0].main;

    document.getElementById('Humidity').innerHTML = weatherData.main.humidity;

    document.getElementById('WindSpeed').innerHTML = weatherData.wind.speed;

    var windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("WChill").innerHTML = windChill;


}    

   