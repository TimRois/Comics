module.exports = app => {
    require("./controllers/comics_page_controller")(app);
    require("./controllers/ganre_controller")(app);
    require("./controllers/ganre_comics_controller")(app);
  
}