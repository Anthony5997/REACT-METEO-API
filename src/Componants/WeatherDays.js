import React, { Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Days from './Days';
import moment from 'moment';
import { Link } from 'react-router-dom';

const APIKEY = "134ff421685558cd4d547acd9c63367d"

class WeatherDays extends Component{

    constructor(props){
        super(props);
        this.state = {
            newCity:"",
            userInput : "",
            day1:[],
            day2:[],
            day3:[],
            day4:[],
            day5:[],
            resApi: false,
            weather: [],
            lat: "",
            lon:""
            }
            this.geo = this.geo.bind(this)
    }

    componentDidMount(){
        this.geo()
    }


    geolocApi = () => {

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=134ff421685558cd4d547acd9c63367d&units=metric`)
            .then(res => res.json())
            .then(async data => {
            await this.parseDate(data)
            await this.setState({resApi : true})
            await this.setState({newCity : data.city.name})
            await localStorage.setItem(this.state.newCity, JSON.stringify(this.state))        
            }).catch((error) => {
                console.log(error)
                this.setState({resApi : false})
    
              });
        }

    api = () =>{   

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.newCity}&units=metric&lang=en&appid=${APIKEY}`)
        .then((res) => res.json())
        .then(async(data) => { 
            console.log("RETOUR API : ", data)
            await this.parseDate(data)
            await this.setState({resApi : true})
            await this.setState({newCity : data.city.name})

            await localStorage.setItem(this.state.newCity, JSON.stringify(this.state))


        }).catch((error) => {
            console.log(error)
            this.setState({resApi : false})

          });

    }

    geo_success = (position) => {
         this.setState({lat: position.coords.latitude, lon: position.coords.longitude })
         this.geolocApi()
    }
      
    geo_error = () => {
        alert("Sorry, no position available.");
    }
    
    geo = () => {
        navigator.geolocation.watchPosition(this.geo_success, this.geo_error);
    } 

    handleSubmit = async (event) => {
        event.preventDefault()
       await this.setState({newCity : this.state.userInput})
       await this.setState({userInput : ""})
       await this.api()
    }

    handleSearch = (event) => {
        this.setState({userInput : event.currentTarget.value});
    }

    setWeather = (day)=>{
        this.setState({weather : day})
    }      
      
    parseDate = (data) =>{
        this.setState({lat: data.city.coord.lat, lon: data.city.coord.lon})
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

            }  
        }

    }

    render(){
        return ( 
            <div className="main-page">
             
                <Form className="d-flex justify-content-center">
                    <Row className="w-100 mb-12 justify-content-center">
                    <Col xs={9} md={3} className= 'align-self-center weather'>

                        <Form.Control type="text" placeholder="Search a city" onChange={this.handleSearch} />
                    
                    </Col>   
                    <Col xs={2} md={3} className= 'align-self-center weather'>
                        <Button className="search-button-style" type="submit" onClick={this.handleSubmit}>
                          Search
                        </Button>
                    </Col>
                    <Col xs={11} md={3} className= 'align-self-center weather'>
                        <Link to='/PreviewSearch'>
                            <div className="item-list d-flex justify-content-center" type="submit" variant="light" onClick={this.localCity} variant='success'>Previous Researches</div>
                        </Link>
                    </Col> 
                    </Row>
                </Form>
                
                <Row className="w-100 m-0">
                    {this.state.resApi === true &&
                    <Days setter={this.setWeather} state={this.state}/>
                    }
                    {this.state.resApi === false &&
                    <div className="select-city">
                        <h2> Please choose a city </h2>
                    </div>
                    }
                </Row>
            </div>
        )
    }
}
export default WeatherDays;

