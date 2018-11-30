const db = require("../../bd");

const controller = "/ganres";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Ganre.findAll({
            attributes: ['id', 'name'],
        }).then(data => {res.send(data); console.log(data)});
    });
    

    app.get(controller + "/all2", (req, res)=>{
        db.Ganre.findAll({
            attributes: ['id', 'name'],
            where: {
                name: {[db.Sequelize.Op.eq]:'ganre1'}
              }
        }).then(data => {res.send(data); console.log(data)});
    });

    
};