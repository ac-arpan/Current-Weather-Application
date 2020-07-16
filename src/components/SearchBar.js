import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'

const OPEN_WEATHER_API_KEY = 'f20c107a87055395f16f3981210aa6d8'

function SearchBar() {
    const [query, setQuery] = useState('')

    const { setWeather, setError, setLoading } = useContext(GlobalContext)

    const inputRef = React.createRef()
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)

            setWeather(data)
            setQuery('')

            data && setError('')
        }
    }

    const fetchWeather = async query => {
        try {
            setLoading(true)
            const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: query,
                units: 'metric',
                APPID: OPEN_WEATHER_API_KEY
            }
        });
    
            setLoading(false)
            return data;
        } catch (err) {
            console.log(err)
            setError(err.message)
            setLoading(false)
        }
    }

    return (
        <div>
            <input type="text" className="search" placeholder="Search For a City..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} ref={inputRef}/>
        </div>
    )
}

export default SearchBar
