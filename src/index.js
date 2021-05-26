const path = require('path')
const express = require('express')
const get_commit_info = require('./commits')


const app = express()
const publicpath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs')
app.use(express.static(publicpath))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res)=>{
    res.render('home', {name:'kola'})
})

app.post('/', async (req, res)=>{
    res.json(get_commit_info(req.body.username, req.body.reponame))
    let a = await get_commit_info(req.body.username, req.body.reponame)
    let b = await a 
    console.log(b)

})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})