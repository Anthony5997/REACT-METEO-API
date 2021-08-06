import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import moment from 'moment';

function InfosDays(props) {

    const mappedInfos =  props.weather.weather.map((days)=>
                        <Row className="margin-info" key={days.dt}>
                            <Col xs={2} md={2}>
                            <span> <i className="far fa-clock"></i> {days.dt_txt ? moment(days.dt_txt ).format('HH:mm')  : ''}</span>
                            </Col>
                            <Col xs={1} md={1}>
                                <Image src={"http://openweathermap.org/img/wn/"+days.weather[0].icon+"@2x.png"} style={{ width: '100%'}} rounded />
                            </Col>            
                            <Col xs={1} md={1}>
                                <span className="">{Math.round(days ? days.main.temp: "")}°</span>
                            </Col>
                            <Col xs={2} md={2}>
                            <span className="">{Math.round(days ? days.main.humidity: "")}%</span>
                            </Col>
                            <Col xs={3} md={3}> 
                            <i class="fas fa-wind"></i> {days ? days.wind.speed : ''}km/h
                            </Col>   
                            <Col xs={3} md={3}>                       
                                {days ? days.weather[0].description : ""}
                            </Col>
                        </Row>
                        )

            return ( 
                    <div className="infos-days">
                        <Row>

                        <Col xs={2} md={2}>
                        </Col>
                        <Col xs={1} md={1} >
                        </Col>
                        <Col xs={1} md={1}>
                        <i class='fas fa-temperature-high'></i>
                        </Col>
                        <Col xs={2} md={2}>
                        <i class="fas fa-tint"></i>
                        </Col>
                        <Col xs={3} md={3}>
                        </Col>
                        <Col xs={3} md={3}>
                        </Col>
                        </Row>
                        {mappedInfos}
                    </div>
            );
}

export default InfosDays;