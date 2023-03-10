const db = require("../models");
const User = db.user;

//funciones de testeo
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
///////////////

//actualiza los datos de direccion e imagen
exports.updateuser = async (req, res) => {
  const { email, img, adress } = req.body;
  console.log(img);
  try {
    if (img !== "") {
      User.update({ img: img }, { where: { email: email } });
    }
    if (adress !== "") {
      User.update({ adress: adress }, { where: { email: email } });
    }
    let user = await User.findAll({ where: { email: email } });
    res.send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
};
//obtiene el carrito por usuario
exports.findUserCart = async (req, res) => {
  const { email } = req.params;

  try {
    let user = await User.findAll({ where: { email: email } });
    res.send(user[0].cart);
  } catch (error) {
    res.status(400).send(error);
  }
};
