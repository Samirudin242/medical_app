"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("HospitalDoctors", {
        fields: ["HospitalId"],
        type: "foreign key",
        name: "custom_fkey_HospitalsId",
        references: {
          table: "Hospitals",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      .then(() => {
        return queryInterface.addConstraint("HospitalDoctors", {
          fields: ["DoctorId"],
          type: "foreign key",
          name: "custom_fkey_DoctorId",
          references: {
            table: "Doctors",
            field: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("HospitalDoctors", "custom_fkey_HospitalsId", {})
    .then(() =>{
      return queryInterface.removeConstraint("HospitalDoctors", "custom_fkey_DoctorId", {})
    })
  },
};
