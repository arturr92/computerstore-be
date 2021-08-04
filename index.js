import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();
const port = process.env.PORT || 4000;

db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

app.use( '/', router);



app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})