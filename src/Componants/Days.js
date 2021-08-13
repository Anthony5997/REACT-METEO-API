import React , { useState }from "react";
import moment from 'moment';
import '../App.css';
import CardDay from './CardDay';
import { Col , Row } from 'react-bootstrap'
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
        <>
           <h2 className="choose-day">Choose a day</h2>
            <div className="card-action d-flex justify-content-center">
                <Row className=" d-flex justify-content-center">
                <Col xs={11} md={2}>
                    <div className="dayAction d-flex justify-content-center" onClick={()=>day(1)}>{props.state.day1[0] ? "Today" :''} </div>
                </Col>
                <Col xs={11} md={2}>
                    <div className="dayAction justify-content-center" onClick={()=>day(2)}>{props.state.day2[0] ? "Tomorrow" :''} </div>
                </Col>
                <Col xs={11} md={2}>
                    <div className="dayAction justify-content-center" onClick={()=>day(3)}>{props.state.day3[0] ? moment(props.state.day3[0].dt_txt).format('dddd') :''} </div>
                </Col>
                <Col xs={11} md={2}>
                    <div className="dayAction justify-content-center" onClick={()=>day(4)}>{props.state.day4[0] ? moment(props.state.day4[0].dt_txt).format('dddd') :''} </div>
                </Col>
                <Col xs={11} md={2}>
                    <div className="dayAction justify-content-center" onClick={()=>day(5)}>{props.state.day5[0] ? moment(props.state.day5[0].dt_txt).format('dddd') :''} </div>
                </Col>    
                </Row>
            </div>
            <div className="d-flex justify-content-center">
                {numberDay === "" &&
                <CardDay weather={props.state.day1} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}
                {numberDay === 1 &&
                <CardDay weather={props.state.day1} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}
                {numberDay === 2 &&
                <CardDay weather={props.state.day2} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}
                {numberDay === 3 &&
                <CardDay weather={props.state.day3} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}
                {numberDay === 4 &&
                <CardDay weather={props.state.day4} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}
                {numberDay === 5 &&
                <CardDay weather={props.state.day5} resApi={props.state.resApi} city={props.state.newCity} lon={props.state.lon} lat={props.state.lat}/>}

            </div>
             
    </>
    );
}

export default Days;