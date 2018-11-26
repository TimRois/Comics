module.exports = (connect) => {
    
    const Ganre = connect.sequelize.define('ganre', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
    
        

    });

    return Ganre
};