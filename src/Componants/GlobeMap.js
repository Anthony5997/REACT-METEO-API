import '../App.css';
import React, {useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Globe from 'react-globe.gl';
import moment from 'moment';

  

function GlobeMap(props) {


  let lat = props.weather.lat
  let lon = props.weather.lon

  const markers = [
      {
        id: 1,
        city: "",
        color: "yellow",
        coordinates: [
          lat,
          lon
        ],
      },
      ]
      const gData = markers.map((element) => ({
        lat:  element.coordinates[0],
        lng: element.coordinates[1],
      }));
     const MAP_CENTER = { lat: lat, lng: lon, altitude: 0.4 }; 
    const globeEl = useRef();
  
  return (
   <div>
       <Container>
        <div>
        <Globe
             ref={globeEl}
              width={500}
              height={400}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
              pointsData={gData}
              atmosphereColor="lightskyblue"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointColor={() => 'yellow'}
              pointAltitude={0.4}
              pointRadius={0.4}
              pointsMerge={true}
              animateIn ={true} 
            />
        </div>

       </Container>
   </div>
  );
}

export default GlobeMap;
