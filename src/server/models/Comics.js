module.exports = (connect) => {
    
    const Comics = connect.sequelize.define('comics', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
        ganre: {
            type: connect.Sequelize.STRING,
        },
        number_page: {
            type: connect.Sequelize.INTEGER,
        },
        author: {
            type: connect.Sequelize.STRING,
        },
    
        

    });

    return Comics
};