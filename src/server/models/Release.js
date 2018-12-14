module.exports = connect => {
  const Release = connect.sequelize.define("releases", {
    id: {
      type: connect.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: connect.Sequelize.STRING,
      unique: true
    },
    price: {
      type: connect.Sequelize.INTEGER
    },

    date_issue: {
      type: connect.Sequelize.DATE
    },
    path: {
      type: connect.Sequelize.STRING
    }
  });

  return Release;
};
