require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e08ca514db5df0c5de7c925').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})