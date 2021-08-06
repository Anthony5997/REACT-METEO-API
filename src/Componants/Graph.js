import '../App.css';
import React from 'react'
import Container from 'react-bootstrap/Container'
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
            label: 'Température de la journée',
            data: temp,
            fill: true,
            backgroundColor: '#387db1',
            borderColor: '#387db1',
          },
        ],
      };
  
  return (
   <div>
      <Line style={{width : "90%", heigth : "90%" ,margin : "0px auto 60px auto"}} data={data}/>
   </div>
  );
}

export default Graph;
