const connect = require("./connect");

const Author = require("./models/Author")(connect);
const Available_comic_strip = require("./models/Available_comic_strip")(connect);
const Comic_strip = require("./models/Comic_strip")(connect);
const Ganre = require("./models/Ganre")(connect);
const Order = require("./models/Order")(connect);
const Release = require("./models/Release")(connect);
const Review = require("./models/Review")(connect);
const Role = require("./models/Role")(connect);
const User = require("./models/User")(connect);

const bd = {};

bd.Author = Author;
bd.Available_comic_strip = Available_comic_strip;
bd.Comic_strip = Comic_strip;
bd.Ganre = Ganre;
bd.Order = Order;
bd.Release = Release;
bd.Review = Review;
bd.Role = Role;
bd.User = User;


Comic_strip.hasMany(Release);
Release.belongsTo(Comic_strip);

Release.hasMany(Review);
Review.belongsTo(Release);

Comic_strip.hasMany(Ganre);
Ganre.belongsTo(Comic_strip);

Author.hasMany(Comic_strip);
Comic_strip.belongsTo(Author);

User.hasMany(Review);
Review.belongsTo(User);

Release.hasMany(Order);
Order.belongsTo(Release);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Available_comic_strip);
Available_comic_strip.belongsTo(User);

Release.hasMany(Available_comic_strip);
Available_comic_strip.belongsTo(Release);

User.hasMany(Role);
Role.belongsTo(User);




bd.sequelize = connect.sequelize;

module.exports = bd;