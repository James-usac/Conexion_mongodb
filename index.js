'use strinct'

var express =  require("express");
var mongoose = require("mongoose");

const port = "9000";

var app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://35.202.63.188:27017/DB_SP1_P2_201314716',{useNewUrlParser: true})
.then(() =>{
    console.log("Se conecto a la base de datos");
    app.listen(port, ()=>{
        console.log("Servidor esta corriendo"+port);
    });
})
.catch((err) => console.error(err));
