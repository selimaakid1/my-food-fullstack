const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

const db = "mongodb+srv://selima123:selima123@foods-s8tcz.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true  },  (err) => {
    if (err) throw err
    console.log('data base connected')
})



app.use('/api/user', require('./routes/user'))
app.listen(5000, () => console.log('Server is running on port 5000...'))