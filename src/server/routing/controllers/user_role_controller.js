const bd = require("../../bd");
const jwt = require("jsonwebtoken");
const UserRole = bd.Role_user;
const controller = "/role_users";

module.exports = app => {
  app.get(controller + "/all", (req, res) => {
    bd.Role_user.findAll({
      include: [{ model: bd.Role }, { model: bd.User }]
    }).then(data => {
      res.send(data);
      console.log(data);
    });
  });

  app.post(controller + "/add", (req, res) => {
    bd.Role_user.create(
      {
        user: {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email
        }
      },
      { include: [bd.User] }
    ).then(data => {
      bd.Role_user.update({ roleId: 2 }, { where: { id: data.id } });
    });
  });

  app.post(controller + "/logIn", (req, res) => {
    let body = req.body;
    let user = { ...body };
    console.log(user);
    UserRole.findAll({
      include: [
        { model: bd.Role },
        {
          model: bd.User,
          where: {
            name: user.name
          }
        }
      ]
    }).then(loggedUser => {
      if (loggedUser || loggedUser.password == user.password) {
        let roles = [];

        for (let i = 0; i < loggedUser.length; i++) {
          roles.push(loggedUser[i].role);
        }
        console.log(loggedUser);
        let token = jwt.sign(
          {
            user: loggedUser[0].user,
            roles: roles
          },
          "secret",
          {
            expiresIn: "2h"
          }
        );
        res.send({ token });
      } else res.sendStatus(401);
    });
  });
};
