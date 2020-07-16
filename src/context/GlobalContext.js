import React, {useState, createContext} from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = props => {

    const [weather, setWeather] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{weather, setWeather, error, setError, loading, setLoading}}>
            {props.children}
        </GlobalContext.Provider>
    )
  
}