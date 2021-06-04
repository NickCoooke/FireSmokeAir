// Colors for air quality ratings.
// Use to map AQI to epa color

const colors = {
  "good": "#006E33",
  "moderate": "#FEDD00",
  "semiunhealthy": "#ED8B00",
  "unhealthy": "#BB0000",
  "very unhealthy": "#68478D",
  "hazardous": "#540B0C",
};

const aqiToColor = (index) => {
  if (index < 51 ) return colors['good'];
  if (index <101 ) return colors['moderate'];
  if (index < 151) return colors['semiunhealthy'];
  if (index < 201) return colors['unhealthy'];
  if (index < 300) return colors['very unhealthy'];
  else return colors['hazardous'];
}
export default aqiToColor;



/* NOTES From X
  1. Title Wild Fire Health Resources
  2. Dark Button Background on cards
  3. Hide Text, it's overwhelming. maybe popup cards? 


*/