import '../App.css';
import React from 'react'
import { Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';
import moment from 'moment';

  

function Graph(props) {


    let hours = props.weather.map( hour => {

        return moment(hour.dt_txt ).format('HH:mm')  

    })

    let temp = props.weather.map( testDay => {

        return testDay.main.temp  

    })


    const data = {
        labels: hours,
        datasets: [
          {
            label: 'Temperature of the day',
            data: temp,
            fill: false,
            backgroundColor: '#387db1',
            borderColor: '#387db1',
          },
        ],
      };
  
  return (
   <div className="globe-width">
     <Col xs={12} md={12}>
       <Line style={{width : "90%", height : "100%" ,margin : "0px auto "}} data={data}/>
     </Col>
   </div>
  );
}

export default Graph;
