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

  const Ganre = sequelize.define('ganre', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  const Role = sequelize.define('role', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
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

  User.hasMany(Role, {as: 'role'});

  const Author = sequelize.define('author', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });


  const Comics = sequelize.define('comics', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name: {
      type: Sequelize.STRING
    },
    number_pages: {
      type: Sequelize.INTEGER
    },
    author: {
      type: Sequelize.STRING
    }, 
    ganre: {
      type: Sequelize.STRING
    }, 

  });
  Comics.belongsToMany(Ganre, {through: 'ganre'});
  Comics.belongsToMany(Author, {through: 'author'});


  Ganre.sync({force: true}).then(() => {
    return Ganre.create({
      id: 1,
      name: 'ganre1'
    });
   });

   Author.sync({force: true}).then(() => {
    return Author.create({
      id: 1,
      name: 'author1',
      country : 'country1',
      email: 'email1' 
    });
   });
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
      role:1
    });
   });
  
  
  Comics.sync({force: true}).then(() => {
    return Comics.create({
      id: 1,
      name: 'Comics1',
      number_pages :33,
      author:'author1' ,
      ganre: 'ganre1'

    });
  
   });


   

 

 
  
 
