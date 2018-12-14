const connect = require("./connect");

const Author = require("./models/Author")(connect);
const Available_comic_strip = require("./models/Available_comic_strip")(
  connect
);
const Comic_strip = require("./models/Comic_strip")(connect);
const Ganre = require("./models/Ganre")(connect);
const Order = require("./models/Order")(connect);
const Release = require("./models/Release")(connect);
const Review = require("./models/Review")(connect);
const Role = require("./models/Role")(connect);
const User = require("./models/User")(connect);
const Ganre_comics = require("./models/Ganre_comics")(connect);
const Order_detail = require("./models/Order_detail")(connect);
const Role_user = require("./models/Role_user")(connect);

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
bd.Ganre_comics = Ganre_comics;
bd.Order_detail = Order_detail;
bd.Role_user = Role_user;

Ganre_comics.belongsTo(Ganre);
Ganre_comics.belongsTo(Comic_strip);
Ganre.hasMany(Ganre_comics);
Comic_strip.hasMany(Ganre_comics);

Role_user.belongsTo(Role);
Role_user.belongsTo(User);
Role.hasMany(Role_user);
User.hasMany(Role_user);

Release.belongsTo(Comic_strip);
Comic_strip.hasMany(Release);

Order_detail.belongsTo(User);
Order_detail.belongsTo(Release);
Order_detail.belongsTo(Order);
Order.hasMany(Order_detail);
User.hasMany(Order_detail);
Release.hasMany(Order_detail);

Available_comic_strip.belongsTo(User);
Available_comic_strip.belongsTo(Release);
User.hasMany(Available_comic_strip);
Release.hasMany(Available_comic_strip);

Author.hasMany(Release);
Release.belongsTo(Author);

User.hasMany(Review);
Release.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Release);

bd.sequelize = connect.sequelize;
bd.Sequelize = connect.Sequelize;

module.exports = bd;
