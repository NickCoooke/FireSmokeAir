import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, {GeolocateControl, Layer} from 'react-map-gl';
import jsgeoda from "jsgeoda";
import '../styles/Map.css';
//import * as aqiData from '../resources/AIRNOW_102020.json';


/******************MAP *************************/

const geolocationStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {
  const [geoData, getGeoData] = useState([])

  const [viewport, setViewport] = useState({
    latitude: 45.5202,
    longitude: -122.6742,
    zoom: 10,
    width: '100%',
    height: '100%',
  })

  /*
  // Loading Data into the map

  const data1 = 'frontend/src/resources/AIRNOW_102020.json'  
  const data2 = 'frontend/src/resources/sample.geojson'

  const data = data2
  useEffect(() => {
    jsgeoda.New().then((geoda) => {
      loadSpatialData(geoda);
    })
  })

  const loadSpatialData = (geoda) => {
    fetch(data)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const nat = geoda.readGeoJSON(data);
        console.log(nat)
      })
  }


  //const API = 'https://jsonplaceholder.typicode.com/posts';
  const aqiData = '../resources/rawAIRNOW.json'
  const fetchPost = () => {
    console.log("fetchpost!")
    fetch(data1)
      .then((res) => {
        res.arrayBuffer()
      })
      .then((res) => {
        console.log(res)

      })
  }
  */
  //JSON.parse: unexpected character at line 1 column 1 of the JSON data

  const _onViewportChange = viewport => setViewport({ ...viewport, transitionDuration: 40 })
  return (
    <div className='map-container' >
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={_onViewportChange}
      >
        < GeolocateControl
          style={geolocationStyle}
        />
      </ReactMapGL>
      <button onClick={fetchPost}>localFetch</button>
    </div>

  );


  /*(
     <div>
       <div className='sidebarStyle'>
         <div>
           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
         </div>
       </div>
       <div className='map-container' ref={mapContainerRef} />
     </div>
   );*/
}

export default Map;


/*
Good Tutorials
  react-map-gl
-   react-map-gl docs   = https://visgl.github.io/react-map-gl/docs
-   intro tutorial vid  = https://www.youtube.com/watch?v=JJatzkPcmoI
-   intro page          = https://blog.logrocket.com/how-to-use-mapbox-gl/
      - geocoder: get users location with a click of a button
      - gsearching: allow user to search for location
-   Choropleth Mapping = https://codesandbox.io/s/3basicmapping-lcguj    

  Mapbox GL-JS
-   Load Large Datasets = https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/
-   Using Layers on Mapbox= https://www.lostcreekdesigns.co/writing/a-complete-guide-to-sources-and-layers-in-react-and-mapbox-gl-js/
-   Mapbox with react=  https://dev.to/laney/react-mapbox-beginner-tutorial-2e35
-   Location Search=    https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/

Sources: https://github.com/mapbox/mapbox-react-examples

*/