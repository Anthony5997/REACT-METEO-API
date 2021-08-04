import './App.css';
import React from 'react'
import Header from '../src/Componants/Header';
import WeatherDays from '../src/Componants/WeatherDays';



function App() {

  
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3"></div>
        <div className="weather card blue-grey darken-1">
       <WeatherDays />
        </div>
      </div>
    </div>
  );
}

export default App;
