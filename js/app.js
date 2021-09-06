// adding api keys 
const APi_KEYS = `35d6d85f3a21b2cbf5c63861fcff4378`

const searchTemparature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APi_KEYS}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}

// create a function for innertext 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('tempUpdate', temparature.main.temp);
    setInnerText('weatherSign', temparature.weather[0].main);
    // set weather icon 
    const iconUrl = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl);
}