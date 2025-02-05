const mongoose = require('mongoose')

// DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

const db = mongoose.connection;

db.on('error',()=>{
    console.log('Database Connection Error')
})

db.once('open',()=>{
    console.log('Database is Connected Succefully')
})


module.exports = mongoose