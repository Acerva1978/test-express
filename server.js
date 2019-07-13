//dependencies
var express = require("express");
var path = require("path");
var app = express();

//port
var PORT = process.env.PORT || 3305;

//midleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
//get route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/form', function(req, res){
    res.sendFile(path.join(__dirname, 'form.html'))
})

app.post('/api/post', function(req, res){
    console.log(req.body)
} )

app.delete('/api/delete', function(req, res){
    res.send('delete route working')
})


//execute server
app.listen(PORT,function(){
    console.log("Connected on PORT " + PORT)
})