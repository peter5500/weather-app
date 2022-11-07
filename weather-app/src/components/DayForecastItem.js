import moment from 'moment'
import React, { useState } from 'react'
import styled from 'styled-components'
import { getIconUrl } from '../api'
import { getTempTextFromKelvin } from '../utils'

const Button = styled.button`
    border: none;
    background-color: transparent;
    padding: 8px;
`;


const ItemDetails = ({ forecast, className }) => {
    return (
        <div className={className}>
            <div className="details">
                <div>Rain: {forecast.rain} mm Humidity: {forecast.humidity}%</div>
                <div></div>
                <div>Wind: {forecast.speed} m/s</div>
            </div>
            <table>
                <tr>
                    <th></th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                    <th>Evening</th>
                    <th>Night</th>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td className="data">{getTempTextFromKelvin(forecast.temp.morn)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.temp.day)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.temp.eve)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.temp.night)}</td>
                </tr>
                <tr>
                    <td>Feels like</td>
                    <td className="data">{getTempTextFromKelvin(forecast.feels_like.morn)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.feels_like.day)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.feels_like.eve)}</td>
                    <td className="data">{getTempTextFromKelvin(forecast.feels_like.night)}</td>
                </tr>
            </table>
        </div>
    )
}

const StyledItemDetails = styled(ItemDetails)`
padding: 16px 32px;
.details {
    border-left: 1px solid #eb6e4b;
    padding-left: 1rem;
}
table {
    width: 100%;
}
.data {
    text-align: center;
}
`



const DayForecastItem = ({ forecast, className }) => {
    const [show, setShow] = useState(false);
    return (
        <div className={className}>
            <div className={'item-container'}>
                <div className="date">{moment.unix(forecast.dt).format('ddd, MMM DD')}</div>
                <div className="rest">
                    <div className="temperature">
                        <img alt="icon" src={getIconUrl(forecast.weather[0].icon)} />
                        <div>{getTempTextFromKelvin(forecast.temp.max)} / {getTempTextFromKelvin(forecast.temp.min)}</div>
                    </div>
                    <div>
                        <span className="desc">{forecast.weather[0].description}</span>
                        <Button onClick={() => setShow(!show)}><b>{show ? "-" : '+'}</b></Button>
                    </div>
                </div>

            </div>
            {show && <StyledItemDetails forecast={forecast} />}
        </div>
    )
}

export default styled(DayForecastItem)`
.item-container {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4pt;
    
    .rest {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
    }
    
    :hover {
        background-color: rgba(72,72,74,.05);
    }
    
    .date {
        width: 30%;
    }
    
    .temperature {
        display: flex;
        align-items: center;
    }
    
    .desc {
        color: #8a8a8a;
    }
}
`
