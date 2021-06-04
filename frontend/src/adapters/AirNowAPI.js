const airnow = require('airnow');

const client = airnow({apiKey: '5B53AAAB-44C7-428F-9B05-38B15C0D0E12'});

export default async function AirNow() {
  // get the observations by a bounded box monitoring site
  let data = await client.getObservationsByMonitoringSite({ bbox:{ minX: -90.806632, 
                                          minY: 24.634217, 
                                          maxX: -71.119132, 
                                          maxY: 45.910790}, 
                                          parameters:["pm25","o3"], 
                                          datatype:"application/vnd.google-earth.kml"}, 
                                          function(err, observations){
                                            if (err) {
                                              console.log(err)
                                            }
                                            if (observations) {
                                              return observations
                                            }
  });
  console.log(data);
  return data;   

}
