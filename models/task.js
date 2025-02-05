const { default: mongoose } = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String , required:false},
    completed:{type:Boolean , default:false},
    category: { type: String, enum: ['Work', 'Personal', 'sport', 'Shopping'], default: 'Personal' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' }
})

module.exports = mongoose.model('Task',taskSchema)