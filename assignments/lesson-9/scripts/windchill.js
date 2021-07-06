let avgtemp = parseInt(document.getElementById('AvgTemp').innerHTML);
let wSpeed = parseInt(document.getElementById('WindSpeed').innerHTML);

let windChill = Math.round(35.74 + 0.6215 * avgtemp - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * avgtemp * Math.pow(wSpeed, 0.16));


document.getElementById('WChill').innerHTML = windChill;






//windChill= Math.round(windChill)  +  "&deg;F";


//document.getElementById('WindChill').innerHTML = windChill;




// Input - get input and convert that string to an integer
//let x = parseInt(document.getElementById('somevalue').innerHTML);

// Processing - some random formula processing with the variable
//let result = (x + 10) / 2;

// Output - round to one decimal and output string with HTML to innerHTML of a div
//document.getElementById('output').innerHTML = "The result is <strong>" + result.toFixed(1) + "</strong>";
