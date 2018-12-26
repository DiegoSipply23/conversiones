
let fahrenheitaCentigrados = (fahrenheit) => {
    return fahrenheit + "°F = "
        + Math.round((fahrenheit - 32) * (5 / 9) * 100) / 100
        + "°C ";
}

console.log(fahrenheitaCentigrados(100));

let celsiusafahrenheit = (fahrenheit) => {
    return fahrenheit + " °C = "
        + Math.round((1.8 * fahrenheit) + 32 )
        + " °F ";
}

console.log(celsiusafahrenheit(100));


let celsiusakelvin = (centigrados) => {
    return centigrados + " °C = " 
    + Math.round((centigrados + 273))
    + "°K";
}

console.log(celsiusakelvin(100));

let kelvinacelsius = (kelvin) => {
    return kelvin + " °K "
    + Math.round((kelvin - 273))
    + " °C ";
}

console.log(kelvinacelsius(100));


