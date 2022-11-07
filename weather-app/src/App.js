import { useState } from 'react';
import styled from 'styled-components';
import CurrentWeather from './components/CurrentWeather';
import DaysForecast from './components/DaysForecast';
import HourlyForecast from './components/HourlyForecast';
import Search from './components/Search';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }

  .body {
    width: 600px;
  }
`

function App() {
  const [city, setCity] = useState('New York')
  return (
    <Container>
      <div className="body">
        <h1>Weather App</h1>
        <Search onSearch={(city) => setCity(city) } />
        <br/>
        <CurrentWeather city={city} />
        <br/>
        <HourlyForecast city={city}/>
        <br/>
        <DaysForecast city={city}/>
      </div>
    </Container>
  );
}

export default App;
