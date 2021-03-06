module.exports = connect => {
  const Comic_strip = connect.sequelize.define("comics", {
    id: {
      type: connect.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: connect.Sequelize.STRING,
      unique: true
    },

    rating: {
      type: connect.Sequelize.INTEGER
    },
    image: {
      type: connect.Sequelize.STRING
    }
  });

  return Comic_strip;
};
