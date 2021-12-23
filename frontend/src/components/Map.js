import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, {Layer} from 'react-map-gl';
import '../styles/Map.css';
import * as aqiData from '../resources/AIRNOW_102020.json';


/******************MAP *************************/

const Map = () => {
 const [viewport, setViewport] = useState({
   latitude: 45.5202,
   longitude: -122.6742,
   zoom: 10,
   width: '100vw',
   height: '70vh',
 }) 
 return (
   <ReactMapGL 
    {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    onViewportChange={viewport => setViewport(viewport)}
    mapStyle= "mapbox://styles/mapbox/dark-v10"

   >
     <Layer {...aqiData} id="aqiData102020" paint={{'fill-color': 'blue'}} />
   </ReactMapGL>
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


-   Load Large Datasets = https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/
-   Using Layers on Mapbox= https://www.lostcreekdesigns.co/writing/a-complete-guide-to-sources-and-layers-in-react-and-mapbox-gl-js/
-   Mapbox with react=  https://dev.to/laney/react-mapbox-beginner-tutorial-2e35
-   Location Search=    https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/

Sources: https://github.com/mapbox/mapbox-react-examples

*/