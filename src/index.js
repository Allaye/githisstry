const path = require('path')
const express = require('express')
const get_commit_info = require('./commits')
const fetch = require('node-fetch')


const app = express()
const publicpath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs')
app.use(express.static(publicpath))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res)=>{
    res.render('home', {name:'data'})
})

app.post('/data', async (req, res)=>{
    if(req.body.username){
        const promise = await get_commit_info(req.body.username, req.body.reponame)
        const data = await promise.json()
        return res.render('info', {data: data})
    }
    return res.render('home', {name:'data'})
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})