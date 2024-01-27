const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "a44d1ad17amsh3452b2d8a088089p19c8f4jsn428db05d56d2",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const getWeather = (city) => {
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");

    cityName.innerHTML = city;

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            temp.innerHTML = response.temp;
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch((err) => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const cityInput = document.getElementById("city");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(cityInput.value);
    });

    // You can also trigger weather for a default city like you did before
    getWeather("Delhi");
});
