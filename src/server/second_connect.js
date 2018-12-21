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
      "/role_users/logIn",
      "/role_users/add",
      "/ganre_comics/all/filter",
      "/ganre_comics/drama",
      "/ganre_comics/fantastic",
      "/ganre_comics/dc",
      "/ganre_comics/marvel",
      "/ganre_comics/kriminal",
      "/available_comics/all",
      "/available_comics/avail",
      "/users/addUser",
      /\/releases*/,
      /\/favicon*/
    ]
  })
);

connection.sequelize
  .authenticate()
  .then(() => console.log("YSE NORMAS,MOGNO PIT"))
  .catch(err => console.log(err));

//bd.sequelize.sync({ alter: true });

app.listen(8080, "localhost", () => {
  console.log("Server startanyl))");
});

require("./routing/controllers")(app);
