const userInput = document.getElementById("userInput").value;

      
        var options = {
          series: [
          {
            name: "High - 2023",
            data: [28, 29, 33, 36, 32, 32, 33]
          },
          {
            name: "Low - 2023",
            data: [12, 11, 14, 18, 17, 13, 13],
          }
        ],
          chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: 'white',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        
        dataLabels: {
          enabled: true,
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Average High & Low Temperature',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },

        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         
          title: {
            text: `Temperature this week of ${userInput}`,
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        let weather__date  = document.getElementById('weather__date')
        weather__date.textContent = new Date()
async function fetchWeather(event) {
  event.preventDefault();
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
    if(result.temp !== undefined && result.humidity !== undefined){
      let temperature = document.getElementById('weather__detail__temperature');
      temperature.textContent =`${result.temp}°C`;
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
      max_temper.textContent = `${result.max_temp+ 1}°C`;
      let min_temper = document.getElementById('mintemperature');
      min_temper.textContent = `${result.min_temp }°C`;
    }else{
      alert('Please enter a correct city name!')
    }
 
  } catch (error) {
    console.error(error);
    userInput.textContent =""
  }
}
