async function fetchWeather(event){
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
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
        let intro = document.getElementById('intro');
        intro.textContent = userInput;
        let temperature =document.createElement('h3');
        let sunRise = document.createElement('li')
        let rise = result.sunrise
        let riseDate =new Date(rise *1000)
        const temp =document.getElementById('temp')
        sunRise.textContent = riseDate;
        temperature.textContent = `${result.temp} C`;
        temp.appendChild(temperature);
        temp.appendChild(sunRise)
    } catch (error) {
        console.error(error);
    }
}
