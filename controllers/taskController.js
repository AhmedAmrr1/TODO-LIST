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
        const updatedTask = await Task.findByIdAndUpdate(id, updatedData, { new: true })
        res.status(200).json({ message: "task updates succefully", updatedTask })

    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}




deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        res.status(200).json({ message: "task deleted succefully", deletedTask })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }


}


module.exports = { getTasks, addTask, updateTask, deleteTask };