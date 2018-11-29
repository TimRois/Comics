module.exports = (connect) => {
    
    const Order_detail = connect.sequelize.define('order_details', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        number_order_detail: {
            type: connect.Sequelize.INTEGER,
            unique: true
        },
    });

    return Order_detail
};