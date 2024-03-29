const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(ciudad, setData) {
    fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        )
        .then((r) => r.json())
        .then((recurso) => {
            if (recurso.main !== undefined) {
                const ciudad = {
                    min: Math.round(recurso.main.temp_min),
                    max: Math.round(recurso.main.temp_max),
                    img: recurso.weather[0].icon,
                    id: recurso.id,
                    wind: recurso.wind.speed,
                    temp: recurso.main.temp,
                    name: recurso.name,
                    weather: recurso.weather[0].main,
                    clouds: recurso.clouds.all,
                    latitud: recurso.coord.lat,
                    longitud: recurso.coord.lon,
                };
                setData((oldCities) => [...oldCities, ciudad]);
            } else {
                alert("City not Found");
            }
        });
}


//lo que hago con este archivo, es copiar la apiKey de la hw 8, y colocarlo como un 
//servicio externo para achicar el codigo principal