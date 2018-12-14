const bd = require("../../bd");

const controller = "/ganres";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Ganre.findAll({
      attributes: ["id", "name"]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.get(controller + "/naychnaya_fantastica", (req, res) => {
    bd.Ganre.findAll({
      attributes: ["id", "name"],
      where: {
        name: { [bd.Sequelize.Op.eq]: "Научная фантастика" }
      }
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
