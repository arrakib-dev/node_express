// include express js
const express = require('express')



// path module
const path = require('path')


//include admin routes
const adminRoutes = require('./routes/admin')
// include shopRoutes
const shopRoutes = require('./routes/shop')

//initiate express
const app = express()

//static file server

app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/admin',adminRoutes)
app.use(shopRoutes)

// 404
app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

//listen to 300 port on localhost
app.listen(3000)