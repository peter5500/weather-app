import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { getHourlyForecast } from '../api'
import { Line } from 'react-chartjs-2';
import { getTempFromKelvin } from '../utils';


const HourlyForecast = ({ city }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!city) {
            return;
        }
        getHourlyForecast(city).then((data) => {
            console.log(data)
            setData(data.hourly.slice(0, 24));
        })
    }, [city]);

    if (!data) {
        return null;
    }

    const labels = data.map(hour => moment.unix(hour.dt).format('HH a'))
    const datasets = [
        {
            label: 'Temperature',
            data: data.map(hour => getTempFromKelvin(hour.temp)),
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }
    ]
    const lineData = { labels, datasets };
    return (
        <div>
            <h2>Hourly forecast</h2>
            <Line data={lineData}/>
        </div>
    )
}

export default HourlyForecast
