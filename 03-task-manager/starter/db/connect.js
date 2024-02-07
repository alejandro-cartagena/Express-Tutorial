const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://alejandrocartagena:alejandrocartagenaMONGO@nodeexpressprojectx.a1wwubo.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose
    .connect(connectionString)
    .then(() => console.log('CONNECTED TO DB...'))
    .catch((err) => console.log(err))