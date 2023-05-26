const express = require('express')
const fs = require('fs')
const router = express.Router()

const views_path = __dirname + '/views/'

let app = express()
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))

app.use((req,res, next)=>{
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let data = `${hour}:${minutes} | ${req.method} | ${req.url} | ${req.get('user-agent')}`
    fs.appendFile("server.log", data + "\n", (err)=>{
        if(err){
            console.log("Error in creating log file: " + err)
        } else {
            console.log('Log written')
        }
    })
    next()
})

app.get('/', (req, res)=>{
    res.sendFile(views_path + 'index.html')
})

app.get('/admin', (req, res)=>{
    res.send("<h1>Admin page</h1><p>Lorem ipsum dolor sit</p>")
})

app.listen(3000, (err)=>{
    if(err){
        console.log(`Error: ${err}`)
    } else {
        console.log('Server runs on port 3000')
    }
})