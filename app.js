const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')

const app = express()
const port = 5000

// middle ware for json parsing
app.use(express.json())

// DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

const db = mongoose.connection;

db.on('error',()=>{
    console.log('Database Connection Error')
})

db.once('open',()=>{
    console.log('Database is Connected Succefully')
})

app.use(taskRoutes)

app.listen(port,()=>{
    console.log(`Server is Listening on Port ${port}`)
})