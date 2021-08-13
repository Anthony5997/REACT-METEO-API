import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import moment from 'moment';

function InfosDays(props) {

    const mappedInfos =  props.weather.weather.map((days)=>
                        <Row className="margin-info" key={days.dt}>
                            <Col className="p-0 ml-1 d-flex justify-content-center align-self-center" xs={2} md={2}>
                            <span> {days.dt_txt ? moment(days.dt_txt ).format('HH:mm')  : ''}</span>
                            </Col>
                            <Col className="p-0 d-flex justify-content-center align-self-center" xs={1} md={1}>
                                <Image src={"http://openweathermap.org/img/wn/"+days.weather[0].icon+"@2x.png"} style={{ width: '100%'}} rounded />
                            </Col>            
                            <Col className="p-0 d-flex justify-content-center align-self-center" xs={1} md={2}>
                                <span className="">{Math.round(days ? days.main.temp: "")}°</span>
                            </Col>
                            <Col className="p-0 d-flex justify-content-center align-self-center" xs={2} md={2}>
                            <span className="">{Math.round(days ? days.main.humidity: "")}%</span>
                            </Col>
                            <Col xs={3} md={3} className="p-0 d-flex justify-content-center align-self-center" > 
                             {days ? Math.round(days.wind.speed) : ''}km/h
                            </Col>   
                            <Col xs={3} md={2}>                       
                                {days ? days.weather[0].description : ""}
                            </Col>
                        </Row>
                        )

            return ( 
                    <div className="infos-days">
                        <Row className="p-0">

                        <Col xs={2} md={2}>
                        <i className="far fa-clock"></i>
                        </Col>
                        <Col xs={1} md={1} >
                        </Col>
                        <Col xs={1} md={2}>
                        <i className='fas fa-temperature-high'></i>
                        </Col>
                        <Col xs={2} md={2}>
                        <i className="fas fa-tint"></i>
                        </Col>
                        <Col xs={3} md={3}>
                        <i className="fas fa-wind"></i>
                        </Col>
                        <Col xs={3} md={2}>
                        </Col>
                        </Row>
                        {mappedInfos}
                    </div>
            );
}

export default InfosDays;