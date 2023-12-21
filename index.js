let options = {
  chart: {
      height: 380,
      type: "line",
      foreColor: '#fff'
  },
  series: [
      {
          name: "Temperature",
          data: [15, 20, 25, 29, 33, 36, 37, 32, 27, 23]
      }
  ],
  fill: {
      type: "gradient",
      gradient: {
          type: 'vertical',
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 1,
          colorStops: [
              {
                  offset: 10,
                  color: "#fc440b",
                  opacity: 1
              },
              {
                  offset: 55,
                  color: "#ffce63",
                  opacity: 1
              },
              {
                  offset: 90,
                  color: "#0a95f9",
                  opacity: 1
              }
          ]
      }
  },
  grid: {
      borderColor: '#6D6D6D'
  },
  stroke: {
      curve: 'smooth'
  },
  yaxis: {
      min: 0,
      max: 45
  },
  xaxis: {
      type: 'category',
      tickAmount: 8,
      categories: [
          ['4 AM'],
          ['6 AM'],
          ['8 AM'],
          ['10 AM'],
          ['12 PM'],
          ['2 PM'],
          ['4 PM'],
          ['6 PM'],
          ['8 PM'],
          ['10 PM']
      ],
      labels: {
          show: true
      }
  }
};

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

let weather__date = document.getElementById('weather__date')
weather__date.textContent = new Date()
async function fetchWeather(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${userInput}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '29b07914aemshbbb733b3a9594e2p15a0c0jsna427e95f6301',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if (result.temp !== undefined && result.humidity !== undefined) {
     
      let temperature = document.getElementById('weather__detail__temperature');
      temperature.textContent = `${result.temp}°C`;
      let city = document.getElementById('city');
      city.textContent = userInput
      let wind = document.getElementById('wind');
      wind.textContent = `${result.wind_speed} km/s`;
      let clody = document.getElementById('cloudy');
      clody.textContent = `${result.cloud_pct}oktas`
      let humidity = document.getElementById('humidity');
      humidity.textContent = `${result.humidity} g.m-3`
      let Sunrise = document.getElementById('sunrise');
      let sunriseUnix = new Date(result.sunrise * 1000)
      Sunrise.textContent = sunriseUnix.toLocaleTimeString()
      let Sunset = document.getElementById('sunset');
      let sunsetUnix = new Date(result.sunset * 1000)
      Sunset.textContent = sunsetUnix.toLocaleTimeString();
      let max_temper = document.getElementById('maxtemperature');
      max_temper.textContent = `${result.max_temp + 1}°C`;
      let min_temper = document.getElementById('mintemperature');
      min_temper.textContent = `${result.min_temp}°C`;
    } else {
     alert('Please enter a correct city name')
    }
  } catch (error) {
    console(error);
  }
}
