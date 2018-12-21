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

  app.get(controller + "/all/filter", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }],
      order: ["comicId"]
    }).then(data => {
      let filter = [];
      let temp_current_comic_strip = data[0].comic.id;
      let genre = [];

      for (let i = 0; i < data.length; i++) {
        if (temp_current_comic_strip == data[i].comic.id)
          genre.push(data[i].genre);
        else {
          filter.push({
            comic: data[i - 1].comic,
            genre
          });
          genre = [];
          temp_current_ganre = data[i].comic.id;
          genre.push(data[i].genre);
        }
      }
      filter.push({
        comic: data[data.length - 1].comic,
        genre
      });
      res.send(filter);
    });
  });

  app.get(controller + "/fantastic", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      where: {
        genreId: 1
      },
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.get(controller + "/drama", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      where: {
        genreId: 2
      },
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
  app.get(controller + "/dc", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      where: {
        genreId: 5
      },
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
  app.get(controller + "/marvel", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      where: {
        genreId: 4
      },
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
  app.get(controller + "/kriminal", (req, res) => {
    bd.Ganre_comics.findAll({
      attributes: ["id"],
      where: {
        genreId: 3
      },
      include: [{ model: bd.Ganre }, { model: bd.Comic_strip }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });
};
