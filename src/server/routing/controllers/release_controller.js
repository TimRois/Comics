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

  app.get(controller + "/findById", (req, res) => {
    bd.Release.findAll({
      include: [{ model: bd.Comic_strip }],

      where: {
        id: Number(req.query.id)
      }
    }).then(data => res.send(data));
  });

  app.get(controller + "/for_comics", (req, res) => {
    let releases = [];
    bd.Release.findAll({
      include: [
        {
          model: bd.Comic_strip,
          where: {
            id: req.query.id
          },
          require: true
        }
      ]
    }).then(data => {
      releases = data;
      let releasesId = data.map(element => {
        return element.id;
      });
      bd.Available_comic_strip.findAll({
        include: [
          {
            model: bd.Release,
            require: true
          },
          {
            model: bd.User
          }
        ],
        where: {
          userId: req.query.user,
          releaseId: releasesId
        }
      }).then(data => {
        let available = [];
        for (let i = 0; i < releases.length; i++) {
          if (
            data
              .map(el => {
                return el.release.id;
              })
              .includes(releases[i].id)
          ) {
            available.push(true);
          } else {
            available.push(false);
          }
        }
        res.send({ releases, available });
      });
    });
  });

  app.post(controller + "/add", (req, res) => {
    console.log("dobav");
    bd.Release.create({
      name: req.body.name
    }).then(data => res.send(data));
  });
};
