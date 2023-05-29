let cel, fah;

// To convert to fahrenheit
function celsiusToFahrenheit(celsius) {
    celsius = parseFloat(celsius);
    cel = (celsius*(9/5) + 32).toFixed(2);
    return cel;
}

// To convert to celsius
function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    fah = ((fahrenheit - 32) * 5/9).toFixed(2);
    return fah;
}

// Prompt user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (Fahrenheit or Celsius)");

if (conversionType.toLowerCase() === "fahrenheit") {
    alert(celsiusToFahrenheit(temperature));
  } else if (conversionType.toLowerCase() === "celsius") {
    alert(fahrenheitToCelsius(temperature));
  } else {
    alert("Invalid conversion type.");
  }



