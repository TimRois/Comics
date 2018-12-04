const db = require("../../bd");

const controller = "/comics_strip";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Comic_strip.findAll({
            attributes: ['name', 'number_page', 'rating','image'],
            
        }).then(data => {res.send(data); console.log(data)});
        
    });
    app.get(controller + "/all2", (req, res)=>{
        db.Comic_strip.findAll({
            attributes: ['id', 'name', 'number_page', 'rating','image'],
            where: {
                id: 4
              }   
            
        }).then(data => {res.send(data); console.log(data)});
        
    });
    app.get(controller + "/all3", (req, res)=>{
        db.Comic_strip.findAll({
            attributes: ['id', 'name', 'number_page', 'rating','image'],
            where: {
                name: 'comics1'
              }   
            
        }).then(data => {res.send(data); console.log(data)});
        
    });
    
};