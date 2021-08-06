import React, { Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Days from './Days';
import moment from 'moment';
import GlobeMapVisited from './GlobeMapVisited';

const APIKEY = "134ff421685558cd4d547acd9c63367d"

class PreviewSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            city : [],
            currentCity : '',
            respApi : false,
            day1:[],
            day2:[],
            day3:[],
            day4:[],
            day5:[],
            lat : "",
            lon : ""
            
        }
    }


    componentDidMount(){
        this.getLocalStorage()
        this.mappedCity()

    }

    getLocalStorage = () =>{
        let cityList = [];
        let data;
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            data = JSON.parse(localStorage.getItem(key))
            cityList.push({"name": key, "latitude": data.lat, "longitude": data.lon})
            this.setState({city : cityList})
        }
    }

    mappedCity = () => {

     return this.state.city.map((key)=> {

        return (<Col md={3} className="margin-info" key={key.name}>
                    <Button onClick={() => this.chooseCurrentCity(key)} value={key.name} key={key.name} variant="success">{key.name}</Button>
                </Col>)
     })
}

    async chooseCurrentCity(city){
        await this.setState({ currentCity : city.name})
        await this.apiRequest()
        console.log(this.state.currentCity)
    }


    apiRequest = () =>{   

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=metric&lang=fr&appid=${APIKEY}`)
        .then((res) => res.json())
        .then(async(data) => { 
            console.log("RETOUR API SELECT CITY: ", data)
            await this.parseDate(data)
            await this.setState({resApi : true})
            await this.setState({newCity : data.city.name})

            await localStorage.setItem(this.state.newCity, JSON.stringify(this.state))


        }).catch((error) => {
            console.log(error)
            this.setState({resApi : false})

          });

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
                console.log("");
            }  
        }

    }

    render(){
        return ( 
            <div className="PreviewCity">
                <Row>
                   {this.mappedCity()}
                </Row>
                 <GlobeMapVisited />
                <Days state={this.state}/>


            </div>
        )
    }
}
export default PreviewSearch;
