import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import moment from 'moment'
import { BeatLoader } from 'react-spinners'

function WeatherCard() {


    const { weather, error, loading } = useContext(GlobalContext)
    const now = new Date()

    if(loading) {
        return (
            <div className="loader"><BeatLoader loading={loading} size = {24} color={'red'}/></div>
        )
    }
    
    return (
        <>
        {weather && weather.main && (
            <article className="widget">
            <div className="weatherIcon">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
            </div>
            <div className="weatherInfo">
                <div className="temperature"><span>{Math.round(weather.main.temp)}&deg;C</span></div>
                <div className="description">
                    <div className="weatherCondition">{weather.weather[0].description}</div>
                    <div className="place">{weather.name}</div>
                </div>
            </div>
            <div className="date">{ moment(now).format("Do MMMM")}</div>
        </article>
        )}
        {error ? <div className="error"> Please enter a valid city name..</div> : null}
        </>
    )
}

export default WeatherCard
