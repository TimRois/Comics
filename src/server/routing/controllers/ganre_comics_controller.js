const bd = require("../../bd");

const controller = "/ganre_comics";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
