var http = require('http');
var express = require('express');

// Configuration

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*************************************** */

//Web server functionality

app.get("/",function(req,res){
    console.log("Request on root page");
    res.send("Hola mundo");
});

app.get("/about",function(req,res){
    res.send("Que tranza perro!!");
});

app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});

/*************************************** */

//API functionality
var catalog = [];

app.get("/API/Catalog",function(req,res){
    console.log(catalog);
    res.json(catalog);
});

app.post("/API/items", function(req,res){
    console.log("Admin want to save the item");

    var item = req.body;
    console.log(item);

    item.id = catalog.length + 1;
    catalog.push(item);

    res.json(item);
});


