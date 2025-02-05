const express = require('express')
const mongoose = require('./config/db')
const taskRoutes = require('./routes/taskRoutes')





const app = express()
const port = 5000

// middle ware for json parsing
app.use(express.json())


app.use(taskRoutes)

app.listen(port,()=>{
    console.log(`Server is Listening on Port ${port}`)
})