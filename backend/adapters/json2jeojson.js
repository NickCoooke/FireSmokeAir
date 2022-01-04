/******************
 * OLD: 
 *  we are now looking at processing this in the front
 *  by sending raw array stream to json2geoStream, which 
 *  converts it to the correct format to load in mapbox. 
 */

// Convert raw airnow json array data (rawJSON) 
//  into a file into a jeojson file. 
//const fs = require("fs").promises;
//import fs from 'fs';
const fs = require('fs').promises;

const filePath = "./AIRNOW_102020.json";
async function json2jeosjon(filePath) {

  try {
    const raw = await fs.readfile(filePath);
    console.log(raw);


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
  } catch (error) {
    console.error("Error in json2jeojson", error);
  }
}

json2jeosjon(filePath);
//export default json2jeosjon;