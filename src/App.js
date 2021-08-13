import './App.css';
import React from 'react'
import Header from '../src/Componants/Header';
import WeatherDays from '../src/Componants/WeatherDays';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PreviewSearch from './Componants/PreviewSearch';


function App() {

  return (
    <div className="App">
      <div className="row m-0 w-100">
        <div className="weather card blue-grey darken-1">
        <Router>
            <Header />
            <Route path='/' exact component={WeatherDays}/>
            <Route path='/PreviewSearch' exact component={PreviewSearch}/>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
