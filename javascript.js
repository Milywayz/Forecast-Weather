

fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c59796062f55d4612d60a1d4b41769ea")
    .then(response => response.json())
    .then(cityFound => {

        let firstCity = cityFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
        console.log(cityFound);

        return fetch("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c59796062f55d4612d60a1d4b41769ea")
    })

    .then(response => response.json())
    .then(data => {
    
    console.log(data);


    })





