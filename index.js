
$(document).ready(function () {
    $(".card").hide().fadeIn(1200);
});


let temperaure = document.querySelector(".temp")

let weather = {
    "apiKey": "04c305b6fa5662acf2e5eb155ec1264f",
    fetchWeather: function(city){
        fetch( 
            "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid="
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data)=> this.displayWeather(data));
        },
        displayWeather: function(data){
            const {name} = data; 
            const {icon, description} = data.weather[0]; 
            const {temp, humidity} = data.main;
            const { speed } = data.wind;
            const { country } = data.sys;
            const { lon, lat } = data.coord;
            document.querySelector(".city").innerText ="Weather in "+ name + ", " +country;
            $(".weather").on("click", function(){
        
                $(document).toggle(temperaure.innerText = Math.floor(parseFloat((temp * 9/5) + 32)) + "F")
                    })
            
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".humidity").innerText ="Humidity: "+ humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: "+ speed + " Km/h";
        temperaure.innerText = temp + "°C";
        document.querySelector(".coord").innerText = "Longitude:   "+ lon +"   Latitude: "+ lat;
    
    },
    
    
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
    
};
document.querySelector(".search button").addEventListener("click", function(){
    $(".card").ready(function () {
        $(".weather").hide().fadeIn(3000);
        setInterval(weather.search(),1000)
    });
})

document.querySelector(".search-bar").addEventListener('keyup', function(event){
    if (event.key == "Enter"){
        $(".card").ready(function () {
            $(".weather").hide().fadeIn(3000);
            setInterval(weather.search(),1000);
        });
    }
})


