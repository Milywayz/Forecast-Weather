let searchButton = document.querySelector('#searchButton')
let searchCity = document.querySelector('#searchCity')







// Add addEventListener
// ClassRepo unit-6 08 parse_JSON



searchButton.addEventListener('click' , function(event){
    event.preventDefault()

    let inputCity = searchCity.ariaValueMax;
    localStorage.setItem("savedCity", inputCity)



    fetch("http://api.openweathermap.org/geo/1.0/direct?q=Fort-Worth&limit=5&appid=c59796062f55d4612d60a1d4b41769ea")
        .then(response => response.json())
        .then(cityFound => {
    
            let firstCity = cityFound[0];
            console.log(firstCity.lat);
            console.log(firstCity.lon);
            console.log(cityFound);
    
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=c59796062f55d4612d60a1d4b41769ea`)
        })
    
        .then(response => response.json())
        .then(data => {
        
        console.log(data);
    
    
        })
})





