const Task = require('../models/task')


getTasks = async (req, res) => {

    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}



addTask = async (req, res) => {
    try {
        const task = new Task(req.body)
        await task.validate()
        await task.save()
        res.status(200).json({ message: "task Added Succefully", task })

    } catch (err) {
        res.status(400).json({ error: err.message })

    }

}




updateTask = async (req, res) => {
    try {

        const { id } = req.params
        const updatedData = req.body
        const task = new Task(req.body) // creates a new instance of the Task model using the data in req.body
        await task.validate() // This will throw an error if the enum value is invalid
        const updatedTask = await Task.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" })
        }

        res.status(200).json({ message: "task updates succefully", updatedTask })



    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}




deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({ message: "task deleted succefully", deletedTask });


    } catch (error) {
        res.status(400).json({ err: error.message })
    }


}


module.exports = { getTasks, addTask, updateTask, deleteTask };