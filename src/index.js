const bodyParser = require('body-parser')
const express= require('express')
const mongoose = require('mongoose')
const route=require('./router/route')

const app=express()

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://chanda:QYho3EZNKLny4znA@cluster0.gkrjc46.mongodb.net/group11Database', {useNewUrlParser: true})
.then(()=> console.log("MongoDB connected"))
.catch((error)=> console.log(error))

app.listen(3000,function (){
   console.log("Port connected to 3000")
})  

app.use('/',route)
