const connect = require("./connet");

const Author = require("./models/Author")(connect);
const Available_comics = require("./models/Available_comics")(connect);
const Comics = require("./models/Comics")(connect);
const Ganre = require("./models/Ganre")(connect);
const Orders = require("./models/Orders")(connect);
const Release = require("./models/Release")(connect);
const Review = require("./models/Review")(connect);
const Role = require("./models/Role")(connect);
const users = require("./models/users")(connect);

const db = {};



db.sequelize = connection.sequelize;

module.exports = db;