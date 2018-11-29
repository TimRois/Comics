module.exports = (connect) => {
    
    const Comic_strip = connect.sequelize.define('comics', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
       
        number_page: {
            type: connect.Sequelize.INTEGER,
        },
        rating: {
            type: connect.Sequelize.INTEGER,
        },

    });

    return Comic_strip
};