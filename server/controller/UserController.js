const { User } = require("../models");
const { compare } = require("../helper/bcrypt");
const jwt = require("jsonwebtoken");
const conversitionDate = require("../helper/conversitionDate");

class userController {
  static register(req, res) {
    let dataUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    console.log(req.body.email);
    User.findOne({
      where: {
        email: dataUser.email,
      },
    }).then((data) => {
      console.log("MAsukkkk");
      if (data) {
        res.status(404).json({ message: `User already exist, please login` });
      } else {

        User.create(dataUser)
          .then((data) => {
            res
              .status(201)
              .json({ message: `Succesfully register a new user`, data: data });
          })
          .catch((err) => {
            res.status(500).json({ message: err });
          });
      }
    });
  }

  static login(req, res) {
    let dataUser = {
      email: req.body.email,
      password: req.body.password,
    };

    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((data) => {
        if (data && compare(dataUser.password, data.password)) {
          const token = jwt.sign(
            { password: data.password, email: data.email },
            "theyaku"
          );
          res.status(200).json({ token: token, data: data });
        } else {
          res.status(401).json({ message: `wrong password or email` });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  static edit(req, res) {
    let dataUser = {
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      weight: req.body.weight,
      height: req.body.height,
    };

    typeof req.body.age == "string"
      ? (dataUser.age = conversitionDate(req.body.age))
      : null;

    User.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          console.log(typeof dataUser.age);

          User.update(dataUser, { where: { id: req.params.id } })
            .then((userData) => {
              User.findByPk(req.params.id).then((user) => {
                res
                  .status(200)
                  .json({ data: user, message: `Succesfully update data` });
              });
            })
            .catch((err) => {
              res.status(400).json({ err: err });
            });
        } else {
          res.status(404).json({ message: `Data not found` });
        }
      })
      .catch((err) => {
        res.status(500).json({ status: 500, message: `internal server error` });
      });
  }
}

module.exports = userController;
