const bd = require("../../bd");

const controller = "/roles";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Role.findAll().then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.post(controller + "/add", (req, res) => {
    console.log("dobav");
    bd.Role.create({
      name: req.body.name
    }).then(data => res.send(data));
  });
};
