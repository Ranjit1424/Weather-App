import SearchBox from './SerachBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp({}){

    const [weatherinfo,setWeatherInfo] = useState({
          city:"Mumbai",
     feelslike :24.28,
    temp: 25.84 ,
    tempMin: 25.84,
    tempMax: 25.84,
    humidity:47,
    weather:"haze"
    })

    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(<div>
        <h2>Weather App by croma</h2>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox info={weatherinfo}/>
    </div>)
}