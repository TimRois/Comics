module.exports = (connect) => {
    
    const Orders = connect.sequelize.define('orders', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number_order: {
            type: connect.Sequelize.INTEGER,
            unique: true
        },
        release: {
            type: connect.Sequelize.STRING,
        },
        user: {
            type: connect.Sequelize.STRING,
           
        },
        purchase_date: {
            type: connect.Sequelize.DATE, 
        },
        
    
        

    });

    return Orders
};