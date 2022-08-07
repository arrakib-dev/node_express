// include express js
const express = require('express')

//initiate express
const app = express()

app.use('/user', (req, res, next)=>{
    console.log('user route')
    res.send('<h1>Hello From user</h1>')
})

app.use('/', (req, res, next)=>{
    console.log('root route')
    res.send('<h1>Hello From root</h1>')
})

//listen to 300 port on localhost
app.listen(3000)