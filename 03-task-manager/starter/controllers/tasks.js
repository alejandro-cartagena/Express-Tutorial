const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}
const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('task updated')
}

const deleteTask = (req, res) => {
    res.send('deleted the task')
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}