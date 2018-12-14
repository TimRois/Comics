var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var connection = require("./connect");
var bd = require("./bd");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200
  })
);
app.use(
  expressJwt({ secret: "secret" }).unless({
    path: [
      "/comics_strip/all",
      "/comics_strip/top",
      "/comics_strip/new",
      "/role_users/logIn"
    ]
  })
);

connection.sequelize
  .authenticate()
  .then(() => console.log("YSE NORMAS,MOGNO PIT"))
  .catch(err => console.log(err));

//bd.sequelize.sync({ force : true });

app.listen(8080, "localhost", () => {
  console.log("Server startanyl))");
});

require("./routing/controllers")(app);
