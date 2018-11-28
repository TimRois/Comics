module.exports = (connect) => {
    
    const Order = connect.sequelize.define('orders', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number_order: {
            type: connect.Sequelize.INTEGER,
            unique: true
        },
        purchase_date: {
            type: connect.Sequelize.DATE, 
        },
        
    
        

    });

    return Order
};