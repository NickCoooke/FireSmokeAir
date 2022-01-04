/*
  array2geoStream takes an obj array, and format it for mapbox
    INPUT: raw airnow json pull data
    PROCESS: maps into geojson obj format
    OUTPUT: Data ready to be loaded into react-map-gl
  
  Cutting Corners:
    Currently we're manually loading this file by importing it! 
  
*/


const filePath = "./AIRNOW_102020.json";

export default function array2geoStream(filePath) {
  fetch(filePath)
    .then((res)=> {
      console.log(res);
    })
    .catch((error) =>  {
      console.error(error);
    }); 

    /*
        let features = rawJSON.map((rawElement) => {
          return {
            "type": "Feature",
            "Properties": {
              "AQI": rawElement.AQI
            },
            "geomerty": {
              "coordinates": [rawElement.Latitude, rawElement.Longitude],
              "type": "Point"
            }
          };
        });
    */
}
