const bd = require("../../bd");

const controller = "/releases";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Release.findAll().then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.get(controller + "/get_release", (req, res) => {
    bd.Release.findAll({
      where: {
        name: req.query.release_name
      }
    }).then(data => {
      res.send(data);
    });
  });

  app.get(controller + "/for_comics", (req, res) => {
    bd.Release.findAll({
      arguments: ["id"],
      include: [
        {
          model: bd.Comic_strip,
          where: {
            id: Number(req.query.id)
          },
          require: true
        }
      ]
    }).then(data => res.send(data));
  });

  app.post(controller + "/add", (req, res) => {
    console.log("dobav");
    bd.Release.create({
      name: req.body.name
    }).then(data => res.send(data));
  });
};
