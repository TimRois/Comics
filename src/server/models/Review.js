module.exports = (connect) => {
    
    const Review = connect.sequelize.define('review', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number_review: {
            type: connect.Sequelize.INTEGER,
            unique: true
        },
        text: {
            type: connect.Sequelize.STRING,
        },
        release: {
            type: connect.Sequelize.STRING,
           
        },
        user: {
            type: connect.Sequelize.STRING,
           
        },
        
    
        

    });

    return Review
};