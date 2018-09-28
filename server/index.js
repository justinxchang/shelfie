require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('Connected to the db')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/api/inventory', controller.grab)
app.post('/api/product', controller.add)


const port = process.env.PORT;
app.listen(port, () => {console.log(`Server is running on port: ${port}`)})