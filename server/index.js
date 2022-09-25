const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/route')
const app = express()

const port = 5000
mongoose.connect("mongodb://localhost:27017/expenseTracker", { useNewUrlParser: true, useUnifiedTopology: true, }, () => {
    console.log("Connected to Database")
});

app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log("server started at " + port)
})

