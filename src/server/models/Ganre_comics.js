module.exports = (connect) => {
    
    const Ganre_comic = connect.sequelize.define('ganre_comics', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        
    });

    return Ganre_comic
};