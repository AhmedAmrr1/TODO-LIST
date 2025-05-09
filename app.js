const express = require('express')
const mongoose = require('./config/db')
const taskRoutes = require('./routes/taskRoutes')


const app = express()
const port =3000


// middleware for json parsing
app.use(express.json())


// middleware serves static files
app.use(express.static('./public'))


app.use(taskRoutes)

app.listen(port,()=>{
    console.log(`Server is Listening on Port ${port}`)
})