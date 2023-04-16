let searchButton = document.querySelector('#searchButton')
let searchCity = document.querySelector('#searchCity')
let cityTemp1 = document.querySelectorAll('.card-title')
let cityWind1 = document.querySelectorAll('.card-subtitle')
let cityHumidity1 = document.querySelectorAll('.card-text')











// searchButton.addEventListener('click' , function(){
    
//     let searchCityVal = searchCity.value
//     let inputCity = searchCityVal
    let inputCity = "Dallas"
    



    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=c59796062f55d4612d60a1d4b41769ea`)
        .then(response => response.json())
        .then(cityFound => {
    
            let firstCity = cityFound[0];
           
    
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=${firstCity.lat}&lon=${firstCity.lon}&appid=c59796062f55d4612d60a1d4b41769ea`)
        })
    
        .then(response => response.json())
        .then(cityInfo => {
        console.log(cityInfo)
        let cityList = cityInfo.list
        console.log(cityInfo);
        console.log(cityInfo.city.name)
            
        let cityName = document.createElement('h2')
        cityName.textContent = cityInfo.city.name
        divContainer.appendChild(cityName)

        let cityTemp = document.createElement('p')
                let cityWind = document.createElement('p')
                let cityHumidity = document.createElement('p')

                cityTemp.textContent = "Temp: " + cityList[0].main.temp + "F"
                cityWind.textContent = "Wind Speed: " +cityList[0].wind.speed
                cityHumidity.textContent = "Humidity: " +cityList[0].main.humidity + "%"


                divContainer.appendChild(cityTemp)
                divContainer.appendChild(cityWind)
                divContainer.appendChild(cityHumidity)

            for (let i = 0; i < cityList.length; i+=8) {
                
                // let cityTemp = document.createElement('p')
                // let cityWind = document.createElement('p')
                // let cityHumidity = document.createElement('p')

                // cityTemp.textContent = cityList[i].main.temp
                // cityWind.textContent = cityList[i].wind.speed
                // cityHumidity.textContent = cityList[i].main.humidity
        

                cityTemp1.textContent = "Temp: " + cityList[i].main.temp + "F"
                cityWind.textContent = "Wind Speed: " +cityList[i].wind.speed
                cityHumidity1.textContent = "Humidity: " +cityList[i].main.humidity + "%"
                //cardBody.textContent = moment(cityList[i], "X").format("MM/DD/YYYY HH:mm:ss") 

               

                // divContainer.appendChild(cityWind)
                // divContainer.appendChild(cityHumidity)
                


            }
            
    
    })
// })





