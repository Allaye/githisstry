const path = require('path')
const express = require('express')
const get_commit_info = require('./commits')


const app = express()
const publicpath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs')
app.use(express.static(publicpath))
app.use(express.json())


app.get('/', (req, res)=>{
    res.render('home', {name:'kola'})
})

app.post('/data', (req, res)=>{
    res.json(req)
    console.log(req)
})


const port = process.env.PORT || 3400;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})