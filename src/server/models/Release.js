module.exports = (connect) => {
    
    const Release = connect.sequelize.define('release', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
        price: {
            type: connect.Sequelize.INTEGER,
        },
        comics: {
            type: connect.Sequelize.STRING,
           
        },
        date_issue: {
            type: connect.Sequelize.DATE,
           
        },
        
    
        

    });

    return Release
};