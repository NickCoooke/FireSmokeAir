import rawData from '../resources/AirNowAPI_20212004162030.json';

// Build mapbox layer json from raw airnow json
let layer = (rawData) => {
  console.log("RAW DATA:", rawData);
}

export default layer
//
// let mapData = AirNowData.map(data => {
//   return [data.Latitude, data.Longitude, data.AQI]
//  });
//  console.log("mapData", mapData)
//  
//  map.addSource("air-now", {
//    "type": "geojson",
//    "data": {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [-77.0323, 38.9131]
//      },
//      "properties": {
//        "title": "Mapbox DC",
//        "marker-symbol": "monument"
//      },
//    }
//  });
//
//