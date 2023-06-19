const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const Database = require('./db')


const db = new Database({
    host: 'localhost',
    user: 'root',
    password: 'ilfat1991',
    database: 'rili_meta'
})


const router = express.Router()

const views_path = __dirname + '/html_themplate/'


let app = express()
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.set('view engine', 'pug')


bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

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

app.use('/login_page', express.static(__dirname+'/html_themplate/login_page'))
app.get('/', (req, res)=>{
    res.sendFile(views_path + 'login_page/index.html')
})
app.post('/', (req, res)=>{
    console.log(req.body) //poluchili dannie iz formi teper nujno eto kak to sohranyat v bd
    console.log(req.body.phone)
    console.log(req.body.pass)
    let results = db.execute("select*from teachers")
    console.log(`This from DB: ${results[0]}`)
    res.send('succes')
})


app.use('/teacher_main', express.static(__dirname+'/html_themplate/teacher_main'))
app.get('/teacher', (req, res)=>{
    //res.sendFile(views_path + 'teacher_main/index.pug')
    res.render(views_path + 'teacher_main/index', {
        name: 'Динис Рафикович'
    })
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