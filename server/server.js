const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const api = require("./src/api/controller/api")
const app = express()
app.use(express.json())
app.use(cors())
const PORT = PROCESS.ENV.PORT || 9090

// MONGO CONNECTION
mongoose.connect("mongodb+srv://brunoo1103:30455249@cluster0.ixfue.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:true})

app.use('/api', api)

app.listen(PORT, () => console.log(`Friends App listening on port ${PORT}!`))