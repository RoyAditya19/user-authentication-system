const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

//Available Routes
app.use('/api/auth', require('./routes/auth'))



app.listen(port, ()=>
{
    console.log(`Your port is running at: http://localhost:${port}`)
})
