module.exports = (connect) => {
    
    const Role_user = connect.sequelize.define('role_users', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

    });

    return Role_user
};