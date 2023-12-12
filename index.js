async function fetchWeather(event) {
  event.preventDefault();
  document.body.style.backgroundImage = "url('tree.jpg')";
  const userInput = document.getElementById("userInput").value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${userInput}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29b07914aemshbbb733b3a9594e2p15a0c0jsna427e95f6301",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    let Humidity = document.getElementById("humidity");
    let Sunrise = document.getElementById("sunrise");
    let Sunset = document.getElementById("sunset");
    let userCity = document.getElementById("userCity");
    let temperature = document.getElementById("temperature");
    let sunSetUnix = new Date(result.sunset * 1000);
let sunRiseUnix = new Date (result.sunrise *1000);
let minTemperature = document.getElementById('minTemp')
minTemperature.textContent = result.max_temp;
let maxTemperature = document.getElementById('maxTemp')
let datee = document.getElementById('date')
datee.textContent = new Date();
let windSpeed = document.getElementById('windSpeed')
windSpeed.textContent = `${result.wind_speed}mp/s`
maxTemperature.textContent = result.max_temp;
    Humidity.textContent = result.humidity;
    Sunrise.textContent = sunRiseUnix.toLocaleTimeString();
    Sunset.textContent = sunSetUnix.toLocaleTimeString();
    temperature.textContent = `${result.temp} °C`;
    userCity.textContent = userInput;
    // const apiDataString = JSON.stringify(result);
    // localStorage.setItem("apiData", apiDataString);
    // const InputThree = document.getElementById("inputThree");
    // if (InputThree) {
    //     InputThree.innerText = apiDataString?.humidity;
    //     console.log(InputThree);
    //   } else {
    //     console.error('Element with ID "inputThree" not found.');
    //   }
    // console.log(InputThree)
  } catch (error) {
    console.error(error);
  }
}
// const prevData = JSON.parse(localStorage.getItem('apiData'))
// const OutputTwo = document.getElementById("outputTwo")
// const Humidity = document.getElementById("output");
// const sunRise = document.createElement('li')
// sunRise.textContent = prevData.sunrise;
// OutputTwo.appendChild(sunRise)
// Humidity.textContent =prevData.sunset;
