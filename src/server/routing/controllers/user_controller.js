const bd = require("../../bd");

const controller = "/users";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.User.findAll().then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
