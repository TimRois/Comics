const Sequelize = require("sequelize");
const sequelize = new Sequelize('comics_site', 'root','andrei895410', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;