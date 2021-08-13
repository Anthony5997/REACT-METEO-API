import '../App.css';
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { Col } from 'react-bootstrap'
import Globe from 'react-globe.gl';

  

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
     const MAP_CENTER = { lat: lat, lng: lon, altitude: 0.2 }; 
     const globeEl = useRef();

     useEffect(() => {
      globeEl.current.pointOfView(MAP_CENTER, 8000);}, 
      []);


  
  return (
   <div className="globe-width">
        <Col xs={12} md={12}>
        <Globe
              ref={globeEl}
              //width={500}
              height={300}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
              pointsData={gData}
              atmosphereColor="lightskyblue"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointColor={() => 'yellow'}
              pointAltitude={0.1}
              pointRadius={0.4}
              pointsMerge={true}
              animateIn ={true} 
            />
        </Col>
   </div>
  );
}

export default GlobeMap;
