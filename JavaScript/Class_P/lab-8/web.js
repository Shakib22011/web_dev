 const weatherKey = "a9a0180313b448fab17150303261801";
    const emailKey = "26de1cacf24041f290bb9e2d3e727b72";

    // WEATHER
    function checkWeather() {
        const city = document.getElementById('cityInput').value;
        const resultBox = document.getElementById('weatherResult');
        if(!city) return;

        resultBox.style.display = 'block';
        resultBox.innerHTML = "🔍 Scanning...";

        fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}`)
            .then(res => res.json())
            .then(data => {
                const temp = data.current.temp_c;
                if(temp > 20) {
                    document.body.style.background = "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)";
                } else {
                    document.body.style.background = "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)";
                }
                resultBox.innerHTML = `<b>${data.location.name}</b>: ${temp}°C<br>${data.current.condition.text}`;
            })
            .catch(err => resultBox.innerHTML = "Error fetching weather.");
    }
    
    // EMAIL
    function checkEmail() {
        const email = document.getElementById('emailInput').value;
        const resultBox = document.getElementById('emailResult');
        if(!email) return;

        resultBox.style.display = 'block';
        resultBox.innerHTML = "🔍 Analyzing reputation...";

        const url = "https://emailreputation.abstractapi.com/v1/";

        fetch(`${url}?api_key=${emailKey}&email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("API Result:", data); 

                const isDeliverable = data.email_deliverability.status === 'deliverable';
                
                // Dynamic Bg
                if(isDeliverable) {
                    document.body.style.background = "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"; 
                    resultBox.innerHTML = `
                        <div class="status-badge" style="background: #2ecc71;">DELIVERABLE ✅</div>
                        <div>The email is deliverable</div>
                    `;
                } else {
                    document.body.style.background = "linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)"; 
                    resultBox.innerHTML = `
                        <div class="status-badge" style="background: #e74c3c;">NOT DELIVERABLE ⚠️</div>
                        <div>The email is not deliverable</div>
                    `;
                }

                resultBox.innerHTML += `
                    <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
                    <details>
                        <summary style="cursor:pointer; color: var(--accent-color); font-size: 0.8rem;">View Raw JSON</summary>
                        <pre>${JSON.stringify(data, null, 2)}</pre>
                    </details>
                `;
            })
            .catch(error => {
                console.log("Error:", error);
                resultBox.innerHTML = "Error connecting to API.";
            });
    }