import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.css'
import aqiToColor from '../resources/colors';
import AirNowData from '../resources/AIRNOW_102020.json'


/******************MAP *************************/
mapboxgl.accessToken =
    'pk.eyJ1IjoidG9hc3RlZGdyZWF0ZnJ1aXQiLCJhIjoiY2tueHVrc2RvMG9pbzJzbzg1d2QzbjJjbCJ9.WZZZmLABakfNWj1BLT7yEg'

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-123);
  const [lat, setLat] = useState(45);
  const [zoom, setZoom] = useState(7);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

  // add markers to map
  AirNowData.map(data => 
    new mapboxgl.Marker({
      color: aqiToColor(data.AQI)
    }).setLngLat([data.Longitude, data.Latitude])
      .addTo(map)
  );

  // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;


/*
Good Tutorials
-   Mapbox with react=  https://dev.to/laney/react-mapbox-beginner-tutorial-2e35
-   Location Search=    https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/

Sources: https://github.com/mapbox/mapbox-react-examples

*/