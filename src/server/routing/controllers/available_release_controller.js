const bd = require("../../bd");

const controller = "/available_comics";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Available_comic_strip.findAll({
      attributes: ["id"],
      include: [{ model: bd.User }, { model: bd.Release }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
