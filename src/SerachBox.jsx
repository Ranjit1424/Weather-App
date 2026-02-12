import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateinfo}) {
 let [city, setCity] = useState("");
 const API_URL = "https://api.openweathermap.org/data/2.5/weather";
 const API_KEY ="69b519ec654a6f2c00aae17c5259312a";

 let getweatherinfo=  async() =>{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result={
      city:city,
      temp: jsonResponse.main.temp,
      tempmMin:jsonResponse.main.temp_min,
      tempmMix:jsonResponse.main.temp_mix,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feelsLike,
      weather:jsonResponse.weather[0].description
    };
    console.log(result);
    return result;
 };

 

  let handleChange = (evt) => {
    setCity(evt.target.value); // ✅ Correct way
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault(); // ✅ Correct spelling
    console.log(city);
    setCity(""); // ✅ Reset input
   let newInfo= await getweatherinfo();
   updateinfo(newInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* ✅ Use onSubmit */}
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange} // ✅ Correct event
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
