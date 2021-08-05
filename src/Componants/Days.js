import React , { useState }from "react";
import moment from 'moment';
import '../App.css';
import CardDay from './CardDay';
import 'bootstrap/dist/css/bootstrap.min.css';


function Days(props) {
    
    

    const [numberDay , setNumberDay] = useState('')
    
    function day(day){


        if(day === 1){
            setNumberDay(day)
        }
        if(day === 2){
            setNumberDay(day)
        }
        if(day === 3){
            setNumberDay(day)
        }
        if(day === 4){
            setNumberDay(day)
        }
        if(day === 5){
            setNumberDay(day)
        }
    }
    


  return (
<div>
    <div>
        {numberDay === "" &&
        <CardDay weather={props.state.day1} city={props.state.newCity}/>}
        {numberDay === 1 &&
        <CardDay weather={props.state.day1} city={props.state.newCity}/>}
        {numberDay === 2 &&
        <CardDay weather={props.state.day2} city={props.state.newCity}/>}
        {numberDay === 3 &&
        <CardDay weather={props.state.day3} city={props.state.newCity}/>}
        {numberDay === 4 &&
        <CardDay weather={props.state.day4} city={props.state.newCity}/>}
        {numberDay === 5 &&
        <CardDay weather={props.state.day5} city={props.state.newCity}/>}

        
    </div>
    <div className="card-action">
        <div className="dayAction" onClick={()=>day(1)}>{props.state.day1[0] ? "Today" :''} </div>
        <div className="dayAction" onClick={()=>day(2)}>{props.state.day2[0] ? "Tomorrow" :''} </div>
        <div className="dayAction" onClick={()=>day(3)}>{props.state.day3[0] ? moment(props.state.day3[0].dt_txt).format('dddd') :''} </div>
        <div className="dayAction" onClick={()=>day(4)}>{props.state.day4[0] ? moment(props.state.day4[0].dt_txt).format('dddd') :''} </div>
        <div className="dayAction" onClick={()=>day(5)}>{props.state.day5[0] ? moment(props.state.day5[0].dt_txt).format('dddd') :''} </div>
    </div>
</div>

  );
}

export default Days;