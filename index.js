const express = require('express');
const router = require('./routes/index.js');
const db = require('./config/db.js');

const app = express();
const port = process.env.PORT || 4000;

db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

app.use(express.json());    
app.use(express.urlencoded({extended:true}));

app.use( '/', router);


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})
