
const API_KEY = "7ea67c4230dcf435aa293e99c4b84128"

function onGeoOK(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    // Current Weather source in Celcius
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const locationString = data.name
            const weatherString = data.weather[0].main
            const tempString = data.main.temp
            const tempMaxString = data.main.temp_max
            const tempMinString = data.main.temp_min
            const weatherContainer = document.getElementById("weather")

            const locationTag = document.createElement("span")
            locationTag.className = "location"
            locationTag.innerText = locationString
            weatherContainer.appendChild(locationTag)

            const weatherNowTag = document.createElement("span")
            weatherNowTag.className = "weather-now"
            weatherNowTag.innerText = weatherString
            weatherContainer.appendChild(weatherNowTag)

            const tempTag = document.createElement("span")
            tempTag.className = "temp"
            tempTag.innerText = `Now ${Math.round(parseInt(tempString))}°C`
            weatherContainer.appendChild(tempTag)

            const tempMinMax = document.createElement("span")
            tempMinMax.className = "temp-min-max"
            tempMinMax.innerText = `Min ${Math.round(parseInt(tempMinString))}°C/ Max${Math.round(parseInt(tempMaxString))}°C`
            tempTag.appendChild(tempMinMax)
        })
}
function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)