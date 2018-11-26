module.exports = (connect) => {
    
    const Role = connect.sequelize.define('role', {
        id: {
            type: connect.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: connect.Sequelize.STRING,
            unique: true
        },
    
        

    });

    return Role
};