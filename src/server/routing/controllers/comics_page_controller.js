const bd = require("../../bd");

const controller = "/comics_strip";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Comic_strip.findAll({
      attributes: ["id", "name", "rating", "image"]
    })
      .then(data => {})
      .then(data => {
        res.send(data);
        console.log(data);
      });
  });
  app.get(controller + "/all2", (req, res) => {
    bd.Comic_strip.findAll({
      attributes: ["id", "name", "rating", "image"],
      where: {
        id: 4
      }
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
  app.get(controller + "/all3", (req, res) => {
    bd.Comic_strip.findAll({
      attributes: ["id", "name", "rating", "image"],
      where: {
        name: "comics1"
      }
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.get(controller + "/top", (req, res) => {
    bd.Comic_strip.findAll({
      attributes: ["id", "name", "rating", "image"],
      order: [["rating", "DESC"]]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
  app.get(controller + "/new", (req, res) => {
    bd.Comic_strip.findAll({
      attributes: ["id", "name", "rating", "image", "createdAt"],
      order: [["createdAt", "DESC"]]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
