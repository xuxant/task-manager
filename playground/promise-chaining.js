require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e085a766440080e0b227c49', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age:1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeandCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count

}

updateAgeandCount('5e085a766440080e0b227c49', 2).then((count) => {
    console.log('Count', count)
}).catch((e) => {
    console.log(e)
})