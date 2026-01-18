
const url = "https://emailreputation.abstractapi.com/v1/";
const apiKey = "26de1cacf24041f290bb9e2d3e727b72";
const email = "it22011@mbstu.ac.bd";

fetch(`${url}?api_key=${apiKey}&email=${email}`)
    .then(res => res.json())
    .then(data => {
        console.log("API Result:", data); 

        if (data.email_deliverability.status === 'deliverable') {
            console.log("deliverable email");
        } else {
            console.log("Not deliverable email");
        }
    })
    .catch(error => console.log("Error:", error));