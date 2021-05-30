const { Doctor, City, Field, Hospital, HospitalDoctor } = require("../models");

class DoctorController {
  static getAllData(req, res) {
    Doctor.findAll({
      include: [City, Field, Hospital],
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getData(req, res) {
    Doctor.findAll({
      include: [City, Field, Hospital],
    })
      .then((datas) => {
        const doctor = [];
        datas.forEach((data) => {
          if (data.City.name === req.params.city) {
            doctor.push(data);
          }
        });
        res.status(200).json(doctor);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getDataByField(req, res) {
    let obj = {
      field: req.body.field,
      city: req.body.city,
    };
    Doctor.findAll({
      include: [City, Field, Hospital],
    })
      .then((datas) => {
        let doctorData = [];
        datas.forEach((data) => {
          if (data.City.name === obj.city && data.Field.name === obj.field) {
            doctorData.push(data);
          }
        });
        res.status(200).json(doctorData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getDataById(req, res) {
    Doctor.findOne({
      where: {
        id: req.params.id,
      },
      include: [City, Field, Hospital],
    })
      .then((datas) => {
        res.status(200).json(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = DoctorController;
