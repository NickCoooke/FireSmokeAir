const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = process.env.PORT || 5000; 



app.use(cors());
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => { 
  res.send({express: 'YOUR EXPRESS ND IS CONNECTED TO REACT' });
}); 

/********SOURCES
 * Express Backend: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
 */