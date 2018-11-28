module.exports = (connect) => {
    
    const Review = connect.sequelize.define('reviews', {
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
    
        
    
        

    });

    return Review
};