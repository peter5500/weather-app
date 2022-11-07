import axios from "axios";

const API_KEY = 'fd796c09b8355868891c804f8da4fec5';


export const getCurrentWeather = (location) => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: location,
            appid: API_KEY
        }
    })
}

export const getHourlyForecast = (location) => {
    return axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: location,
            appid: API_KEY
        }
    }).then(resp => {
        const {lat, lon} = resp.data[0];
        return axios.get('https://api.openweathermap.org/data/2.5/onecall?', {params: {
            lat,
            lon,
            exclude:'current,minutely,daily,alerts',
            appid: API_KEY
        }}).then(resp => {
            return resp.data;
        })
    })
}

export const getDaysForecast = (location, count = 8) => {
    return axios.get('https://api.openweathermap.org/data/2.5/forecast/daily', {
        params: {
            q: location,
            cnt:count,
            appid: API_KEY
        }
    })
}


export const getIconUrl = (iconName) => `http://openweathermap.org/img/wn/${iconName}.png`

