// Global Variables
let searchButton = document.querySelector('#searchButton')
let searchCity = document.querySelector('#searchCity')
let cityTemp1 = document.querySelectorAll('.card-title')
let cityWind1 = document.querySelectorAll('.card-subtitle')
let cityHumidity1 = document.querySelectorAll('.card-text')
let weather = document.querySelector('.weather')
let allCities = [];
let ul = document.querySelector('.showPastCities')







// Search City Input
searchButton.addEventListener('click' , function(){
    
    // Getting the value of what you search
    let searchCityVal = searchCity.value
    let inputCity = searchCityVal
   // Storing input city into strings
    function storage(){
        let cities = localStorage.getItem("inputCity")
        
        if (cities != null){
            let citesParsed = JSON.parse(cities)
            citesParsed.push(inputCity)
            localStorage.setItem('inputCity' , JSON.stringify(citesParsed))
        }
        else {
            let citiesAll = [];
            citiesAll.push(inputCity)
            localStorage.setItem('inputCity' , JSON.stringify(citiesAll))
        }
        
        
    }
    // Displaying your local storage
    function displayCities() {
        
        let cities = localStorage.getItem("inputCity")
        if(cities == null) return; 
        ul.innerHTML = ""
        let parsedCities = JSON.parse(cities)
        for (let i = 0; i < parsedCities.length; i++) {
            
            let liCities = document.createElement('button')
            
            liCities.textContent = parsedCities[i]
            liCities.addEventListener("click" , function(event){
                searchWeather(event.target.innerText)


            })
            
            ul.appendChild(liCities)
        }
    }
    // Calling Functions
    storage();
    displayCities();
    searchWeather(inputCity);
    function searchWeather(inputCity){
        
    // Fetching information from the APIs
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=c59796062f55d4612d60a1d4b41769ea`)
        .then(response => response.json())
        .then(cityFound => {
    
            let firstCity = cityFound[0];
           
    
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=${firstCity.lat}&lon=${firstCity.lon}&appid=c59796062f55d4612d60a1d4b41769ea`)
        })
    
        .then(response => response.json())
        .then(cityInfo => {
        
        //Div Container Display
        let cityList = cityInfo.list
        let cityName = document.querySelector('#cityName')
        cityName.textContent = cityInfo.city.name
        
    
        let todaysDate = document.querySelector('.todaysDate')
        todaysDate.textContent = dayjs().format('MMM DD, YYYY')
        
    
    
        let cityTemp = document.createElement('p')
                let cityWind = document.createElement('p')
                let cityHumidity = document.createElement('p')
    
                cityTemp.textContent = "Temp: " + cityList[0].main.temp + "°F"
                cityWind.textContent = "Wind Speed: " +cityList[0].wind.speed + "MPH"
                cityHumidity.textContent = "Humidity: " +cityList[0].main.humidity + "%"

                let cardImageDiv = document.createElement('img')
                cardImageDiv.classList.add('card-Image')
                cardImageDiv.src = `https://openweathermap.org/img/wn/${cityList[0].weather[0].icon}.png`
    
                divContainer.appendChild(cardImageDiv)
                divContainer.appendChild(cityTemp)
                divContainer.appendChild(cityWind)
                divContainer.appendChild(cityHumidity)
                weather.innerHTML =""

            // Card Display
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
                cardSubtitle.textContent = "Temp: " + cityList[i].main.temp + "°F"
    
                let mb2 = document.createElement('h5')
                mb2.classList.add('mb-2')
                mb2.textContent =  "Wind Speed: " + cityList[i].wind.speed + "MPH"
    
                let cardText = document.createElement('h5')
                cardText.classList.add('card-text')
                cardText.textContent = "Humidity: " + cityList[i].main.humidity + "%"
    
                let cardImage = document.createElement('img')
                cardImage.classList.add('card-Image')
                cardImage.src = `https://openweathermap.org/img/wn/${cityList[i].weather[0].icon}.png`
    
                cards.appendChild(titleCard)
                cards.appendChild(cardImage)
                cards.appendChild(cardSubtitle)
                cards.appendChild(cardText)
                cards.appendChild(mb2)
                cards.appendChild(cardBody)
                weather.appendChild(cards)
    
                
            } 
            
    
    })
}})





