const express = require('express')
const bodyParser = require('body-parser')
const route = require('./Routes/route')
const cors = require('cors')

const app = express();
const {sql} = require('./Models/blogModel')


app.use(bodyParser.json())
app.use(cors());

app.use('/', route)


sql.connect((err) => {
    if(err) console.log(err)
    else console.log("Connected with MySQL Server !!!")
})

const port = process.env.PORT || 5000
app.listen(port, function () {
    console.log("app is running on the port" + port)
})

module.exports = app
