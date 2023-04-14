let searchButton = document.querySelector('#searchButton')
let searchCity = document.querySelector('#searchCity')







// Add addEventListener
// ClassRepo unit-6 08 parse_JSON



// searchButton.addEventListener('click' , function(){
    

    let inputCity = "Dallas"
    // localStorage.setItem("savedCity", inputCity)



    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=c59796062f55d4612d60a1d4b41769ea`)
        .then(response => response.json())
        .then(cityFound => {
    
            let firstCity = cityFound[0];
            // console.log(firstCity.lat);
            // console.log(firstCity.lon);
            // console.log(cityFound);
    
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=c59796062f55d4612d60a1d4b41769ea`)
        })
    
        .then(response => response.json())
        .then(cityInfo => {
        
        let cityList = cityInfo.list
        console.log(cityInfo);
        console.log(cityInfo.city.name)
        let cityName = document.createElement('h2')
        cityName.textContent = cityInfo.city.name
        divContainer.appendChild(cityName)

            for (let i = 0; i < cityList.length; i+=8) {
                
                let cityTemp = document.createElement('p')
                let cityWind = document.createElement('p')
                let cityHumidity = document.createElement('p')

                cityTemp.textContent = cityList[i].main.temp
                cityWind.textContent = cityList[i].wind.speed
                cityHumidity.textContent = cityList[i].weather

                divContainer.appendChild(cityTemp)
                divContainer.appendChild(cityWind)
                divContainer.appendChild(cityHumidity)
                
            }
            
    
    
    
    
    
    })
// })





