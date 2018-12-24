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

  app.get(controller + "/avail", (req, res) => {
    bd.Available_comic_strip.findAll({
      include: [{ model: bd.User }, { model: bd.Release }],
      where: {
        userId: Number(req.query.id)
      }
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.post(controller + "/add", (req, res) => {
    console.log(req.body.id_user.user.id);
    bd.Available_comic_strip.create(
      {
        userId: req.body.id_user.user.id,
        releaseId: req.body.rel_id
      },
      { include: [{ model: bd.User }, { model: bd.Release }] }
    ).then(data => {
      res.send(data);
    });
  });
};
