const mongoose = require('mongoose')

const mongodb_uri = 'mongodb+srv://palak123:palak123@cluster0.ece8f.mongodb.net/Tracker?retryWrites=true&w=majority'

mongoose.connect(mongodb_uri, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
})
