module.exports = (connect) => {
    
    const Author = connect.sequelize.define('authors', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: {
            type: connect.Sequelize.STRING,
        },
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
        email: {
            type: connect.Sequelize.STRING,
            unique: true
        },
        

    });

    return Author
};