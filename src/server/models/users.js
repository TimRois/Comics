module.exports = (connect) => {
    
    const Users = connect.sequelize.define('user', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: connect.Sequelize.STRING,
        },
    
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
    
        password: {
            type: connect.Sequelize.INTEGER,
        },
        password: {
            type: connect.Sequelize.STRING,
        }

    });

    return Users
};