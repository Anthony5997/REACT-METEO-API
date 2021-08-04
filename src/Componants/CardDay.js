import '../App.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

function CardDay(props) {
    

    
    function card(){

        let srcImg = ""
        if(props.weather[0]){
            return srcImg = "http://openweathermap.org/img/wn/"+props.weather[0].weather[0].icon+"@2x.png" 
        }else{
            return srcImg = ""
        }
    }

    console.log("IMG : ", card())

  return ( 
    <Row  className="justify-content-center text-center text-white" >
        <Col xs={12} md={10} className= 'align-self-center weather'>
            <Card style={{ width: '100%', background: '#0b0829', padding: '20%' }}>
                <Card.Body>
                    <Card.Img variant="top" src={card()} style={{ width: '50%'}}/>
                    <Card.Title>{props.city ? props.city : ""} </Card.Title>
                    <Card.Text>
                        <span className="temperature">{Math.round(props.weather[0] ? props.weather[0].main.temp: "")} °</span>
                        <div className="wind">Vent {props.weather[0] ? props.weather[0].wind.speed : ''}km/h 
                                                    ({props.weather[0]? props.weather[0].wind.deg : ''}°)</div>
                        <div>{props.weather[0] ? props.weather[0].weather[0].description : ""}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>   
    </Row>
  );
}

export default CardDay;