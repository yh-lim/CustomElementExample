var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(9000, function(){
    console.log("Express server has started on port 9000")
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/main.html')
});