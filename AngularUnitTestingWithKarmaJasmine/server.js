var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan =require('morgan');
var path = require('path');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
  next();
});


app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8585);
console.log('project is running on 8585');