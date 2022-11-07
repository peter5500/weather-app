import React, { useEffect, useState } from 'react'
import { getDaysForecast } from '../api';
import DayForecastItem from './DayForecastItem';

const DaysForecast = ({ city, className }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!city) {
            return;
        }
        getDaysForecast(city).then(resp => {
            setData(resp.data);
        })
    }, [city]);
    if(!data) {
        return null;
    }

    return (
        <div>
            <h2>8-day forecast</h2>
            {data.list.map(forecast => {
                return <DayForecastItem key={forecast.dt} forecast={forecast}/>
            })}
        </div>
    )
}

export default DaysForecast
