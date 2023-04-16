let searchButton = document.querySelector('#searchButton')
let searchCity = document.querySelector('#searchCity')
let cityTemp1 = document.querySelectorAll('.card-title')
let cityWind1 = document.querySelectorAll('.card-subtitle')
let cityHumidity1 = document.querySelectorAll('.card-text')
let weather = document.querySelector('.weather')
let allCities = [];








// searchButton.addEventListener('click' , function(){
    
//     let searchCityVal = searchCity.value
//     let inputCity = searchCityVal
    let inputCity = "Dallas"
    function storage(){
        const cities = localStorage.getItem("inputCity")

        if (cities != null){
            let citesParsed = JSON.parse(cities)
            citesParsed.push(inputCity)
            localStorage.setItem('inputCity' , JSON.stringify(citesParsed))
        }
        else {
    
            localStorage.setItem('inputCity' , JSON.stringify(inputCity))
        }
        
            
    }
    function displayCities() {

        const cities = localStorage.getItem("inputCity")
        if(cities == null) return; 

        const parsedCities = JSON.parse(cities)
        for (let i = 0; i < parsedCities.length; i++) {
            
            

        }
    }



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
            
        let cityName = document.querySelector('#cityName')
        cityName.textContent = cityInfo.city.name
        // divContainer.appendChild(cityName)

        let todaysDate = document.querySelector('.todaysDate')
        todaysDate.textContent = dayjs().format('MMM DD, YYYY')
        


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
                
                let cityTemp = document.createElement('p')
                let cityWind = document.createElement('p')
                let cityHumidity = document.createElement('p')
    

                cityTemp.textContent = cityList[i].main.temp
                cityWind.textContent = cityList[i].wind.speed
                cityHumidity.textContent = cityList[i].main.humidity

                let cards = document.createElement('div')
                cards.classList.add('card')
        
                let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

                let titleCard = document.createElement('h5')
                titleCard.classList.add('card-title')
                titleCard.textContent = dayjs(cityList[i].dt_txt).format('MMM DD, YYYY')

                let cardSubtitle = document.createElement('h5')
                cardSubtitle.classList.add('card-subtitle')
                cardSubtitle.textContent = "Temp: " + cityList[0].main.temp + "F"


                cards.appendChild(cardSubtitle)
                cards.appendChild(cardBody)
                cards.appendChild(titleCard)
                weather.appendChild(cards)

                // console.log(cityTemp1)
                // cityTemp1.textContent = "Temp: " + cityList[i].main.temp + "F"
                // cityWind.textContent = "Wind Speed: " +cityList[i].wind.speed
                // cityHumidity1.textContent = "Humidity: " +cityList[i].main.humidity + "%"
                //cardBody.textContent = moment(cityList[i], "X").format("MM/DD/YYYY HH:mm:ss") 

               

                


            }
            
    
    })
// })





