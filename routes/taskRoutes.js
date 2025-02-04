const express = require ('express')
const router = express.Router()
const Task = require ('../models/task')



router.get('/tasks',async (req,res)=>{

    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)

    } catch (err) {
        res.status(500).json({error: err.message})
    }
})


router.post('/tasks' ,async (req,res)=>{
    try {
        const task = new Task(req.body)
        await task.save()
         res.status(200).json({message :"task Added Succefully",task})
        
    } catch (err) {
        res.status(400).json({error: err.message})
        
    }
    
})


router.put('/tasks/:id', async (req,res)=>{
    try {
        
        const{id}=req.params
        const updatedData = req.body
        const updatedTask = await Task.findByIdAndUpdate(id,updatedData,{new:true})
        res.status(200).json({message:"task updates succefully",updatedTask})
        
    } catch (error) {
        res.status(400).json({err:error.message})
    }
})

router.delete('/tasks/:id', async (req,res)=>{
    try {
        const {id} = req.params
         const deletedTask = await Task.findByIdAndDelete(id)
         res.status(200).json({message:"task deleted succefully", deletedTask})
    } catch (error) {
        res.status(400).json({err:error.message})
    }


})






/* router.get('/filterTasks/:title', async (req,res)=>{
    try {
        const {title} = req.params
        const filterTasks = await Task.findOne((oneTitle))
    } catch (error) {
        
    }
}) */


module.exports = router