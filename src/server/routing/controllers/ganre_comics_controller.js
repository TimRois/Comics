const db = require("../../bd");

const controller = "/ganre_comics";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Ganre_comics.findAll({
            attributes: ['id'],
            include: [
                {model: db.Ganre},
                {model: db.Comic_strip},
                
            ],

        }).then(data => {res.send(data); console.log(data)});
    });
    
};