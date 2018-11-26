const Sequelize = require('sequelize');
const sequelize = new Sequelize('comics_site', 'root', 'andrei895410', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  

  const Role = sequelize.define('role', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true 
    },
    name: {
      type: Sequelize.STRING
    }
  });

  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true 
    },
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.INTEGER
    }
  });

  User.hasOne(Role);

  
   Role.sync({force: true}).then(() => {
    return Role.create({
      id: 1,
      name: 'role1'     
    });
   });
  
   User.sync({force: true}).then(() => {
    return User.create({
      id: 1,
      name: 'user1',
      password : '12345678',
      email: 'email1',

    });
   });
  
  
 