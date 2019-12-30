require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e085a766440080e0b227c49', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
