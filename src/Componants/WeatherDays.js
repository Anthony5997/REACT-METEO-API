import React, { Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SearchCity from './SearchCity';
import Days from './Days';
import moment from 'moment';

const APIKEY = "134ff421685558cd4d547acd9c63367d"

class WeatherDays extends Component{
    state = {
    newCity:"Lyon",
    userInput : "",
    day1:[],
    day2:[],
    day3:[],
    day4:[],
    day5:[],
    resApi: false,
    weather: []
    }

    componentDidMount(){
        this.api()
    }

    api =() =>{   

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.newCity}&units=metric&lang=fr&appid=${APIKEY}`)
        .then((res) => res.json())
        .then(async(data) => { 

            console.log("RETOUR API : ", data)
             await this.parseDate(data)
             await this.setState({resApi : true})
        });
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({newCity : this.state.userInput})
        this.api()

    }

    handleSearch = (event) => {
        this.setState({userInput : event.currentTarget.value});
        console.log("UserInput " , event.currentTarget.value);
    }


    setWeather = (day)=>{
        this.setState({weather : day})
    }      
      
    parseDate = (data) =>{
        this.setState({day1 : [] , day2 : [],day3 : [],day4 : [],day5 : []})
        let dateArray = '';   
        const day1Date = moment().format('YYYY-MM-DD' );    
        const day2Date = moment().add(1, 'day').format('YYYY-MM-DD' );
        const day3Date = moment().add(2, 'day').format('YYYY-MM-DD' );
        const day4Date = moment().add(3, 'day').format('YYYY-MM-DD' );
        const day5Date = moment().add(4, 'day').format('YYYY-MM-DD' );
        for (let index = 0; index < data.list.length; index++) {
        dateArray = data.list[index].dt_txt.split(" ", 1)

        switch (dateArray[0]) {
            case day1Date:
                let day1Array = this.state.day1.slice()
                day1Array.push(data.list[index])
                this.setState({day1: day1Array})
                break;

            case day2Date:
                let day2Array = this.state.day2.slice()
                day2Array.push(data.list[index])
                this.setState({day2: day2Array})
                break; 

            case day3Date: 
            let day3Array = this.state.day3.slice()
            day3Array.push(data.list[index])
            this.setState({day3: day3Array})
                break; 
                       
            case day4Date:
                let day4Array = this.state.day4.slice()
                day4Array.push(data.list[index])
                this.setState({day4: day4Array})
                break;
            case day5Date:
            let day5Array = this.state.day5.slice()
            day5Array.push(data.list[index])
            this.setState({day5: day5Array})
            break;
            default:
                console.log("OK")
            }  
        }

        console.log("STATE FILLED", this.state);
        }

    render(){

        return ( 
            <Row  className="justify-content-center text-center text-white" >
                <Col xs={12} md={6} className= 'align-self-center weather'>
                    <Form onSubmit={this.handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Rechercher une ville</Form.Label>
                            <Form.Control type="text" placeholder="Rechercher une ville" onChange={this.handleSearch} />
                        </Form.Group>
                            </Row>
                        
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    </Form>
                    <Days setter={this.setWeather} state={this.state}/>
                </Col>   
            </Row>
        )
    }
}
export default WeatherDays;