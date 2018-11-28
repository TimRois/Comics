module.exports = (connect) => {
    
    const User = connect.sequelize.define('users', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

    return User
};