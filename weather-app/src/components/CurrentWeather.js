import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getCurrentWeather, getIconUrl } from '../api';
import { getTempTextFromKelvin } from '../utils';
import moment from 'moment'

const CurrentWeather = ({ city, className }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!city) {
            return;
        }
        getCurrentWeather(city).then(resp => {
            setData(resp.data);
        })
    }, [city]);

    return !data ? null : (
        <div className={className}>
            <div className="time">{moment.unix(data.dt).format('MMM DD, HH:mm')}</div>
            <h4 className="location">{data.name}, {data.sys.country}</h4>
            <div className="temperature">
                <div>
                    <img alt="icon" src={getIconUrl(data.weather[0].icon)} />
                </div>
                <p className="temp-text">{getTempTextFromKelvin(data.main.temp)}</p>
            </div>
            <div>
                <p><strong>Feels like {getTempTextFromKelvin(data.main.feels_like)}. {data.weather[0].main}</strong></p>
            </div>
            <div className="details">
                <div>Wind: {data.wind.speed} m/s</div>
                <div>Humidity: {data.main.humidity}%</div>
            </div>
        </div>
    )
}

export default styled(CurrentWeather)`
.time {
    color: #eb6e4b;
}
.location {
    font-size: 1.5rem;
    margin: 0.5rem 0;
}
.details {
    border-left: 1px solid #eb6e4b;
    padding-left: 1rem;
}
.temperature {
    display: flex;
    align-items: center;
    img {
        height: 80px;
    }
    .temp-text {
        font-size: 2rem;
    }
}
`
