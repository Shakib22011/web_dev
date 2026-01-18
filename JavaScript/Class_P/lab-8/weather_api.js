const weatherUrl = "http://api.weatherapi.com/v1/current.json";
const weatherKey = "a9a0180313b448fab17150303261801";
const city = "Dhaka"; 

fetch(`${weatherUrl}?key=${weatherKey}&q=${city}`)
    .then(res => res.json())
    .then(data => {
        console.log("API Result:", data);
        if (data.current.temp_c > 20) {
            console.log(`It's warm in ${city} (${data.current.temp_c}°C)`);
        } else {
            console.log(`It's cool in ${city} (${data.current.temp_c}°C)`);
        }
    })
    .catch(error => console.log("Error:", error));