require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// Middleware
// app.use(express.static('./public'))
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send("HELLO WORLD")
})

app.use('/api/v1/tasks', tasks)

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})



// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task
