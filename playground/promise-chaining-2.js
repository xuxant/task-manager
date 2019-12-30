require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e08ca514db5df0c5de7c925').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskandCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskandCount('5e08c9c5c17ca00c46152c16').then((count) => {
    console.log('Count', count)
}).catch((e) => {
    console.log('Error', e)
})