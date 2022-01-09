import React, {useState} from "react";
import Select from 'react-select';
import {Text} from "@arwes/core";
import axios from "axios";
import border from "../border_g.svg";


const duration = {enter: 2000};

const options = [
    {label: 'Odesa'},
    {label: 'Lviv'},
    {label: 'Kiev'},
];

const Weather = () => {


    const [selectedOption, SetSelectedOption] = useState(null)
    const [result, setResult] = useState(null)

    const weatherData = async (name) => {

        const results = await axios.post(`/.netlify/functions/weather`,  name)
        setResult(results)

    }

    const handleChange = (selected) => {
        SetSelectedOption({selected})
        weatherData(selected.label)
    };

    return (
        <div className="weather">
            <div className="weather_info">
                <Text animator={{duration}}>
                    <p className='center'>This example will use the serverless netlify function to retrieve weather data
                        from the server <a href="https://openweathermap.org/">openweathermap</a></p>
                    <h2 className='center'>Specify city specify</h2>
                </Text>

                <Select onChange={handleChange} options={options} className='weather_select'/>
            </div>

            <div className='weather_box'>

                <img className="weather_border_up" src={border} alt="border"/>
                {selectedOption ?
                    <>
                        {result ?
                            <div className='weather_data'>
                                <div className='weather_data_box'>
                                    <h2 className='weather_city'>{result.data.name || 'test'}</h2>
                                    <div className='weather_icon'>
                                        <img src={`https://openweathermap.org/img/w/${result.data.weather[0].icon}.png`}
                                             alt="weather"/>
                                    </div>
                                </div>
                                <div>
                                    <p className='weather_text'>Current
                                        temp: <span>{Math.round(result.data.main.temp) || 'test'}C</span></p>
                                    <p className='weather_text'>Feels
                                        like: <span>{Math.round(result.data.main.feels_like) || 'test'}C</span></p>
                                    <div className='weather_data_temp'>
                                        <p>{result.data.weather[0].description || 'test'}</p>
                                        <p>{result.headers.date || 'test'}</p>
                                    </div>
                                </div>
                            </div>
                            : <p className='load'>loading...</p>

                        }
                    </>

                    : <p className='center'>Please select city...</p>
                }
                <img className="weather_border_bottom" src={border} alt="border"/>
            </div>


        </div>

    );
}
export default Weather;