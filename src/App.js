import React from 'react';
import './App.css';
import { GlobalContextProvider } from './context/GlobalContext'
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {

  return (
    <GlobalContextProvider>
      <div className="App">
        <SearchBar/>
        <WeatherCard/>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
