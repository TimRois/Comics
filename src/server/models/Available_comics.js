module.exports = (connect) => {
    
    const Available_comics = connect.sequelize.define('available_comics', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        user: {
            type: connect.Sequelize.STRING,
        },
        release: {
            type: connect.Sequelize.STRING,
           
        },
    });

    return Available_comics
};