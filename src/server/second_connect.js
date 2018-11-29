var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var connection = require("./connect");
var bd = require("./bd");


connection.sequelize
            .authenticate()
                .then(() => console.log("YSE NORMAS"))
                .catch(err => console.log(err));

bd.sequelize.sync({ force : true }); 

