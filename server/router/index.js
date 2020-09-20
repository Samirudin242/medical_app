const router = require("express").Router();
const DoctorController = require("../controller/DoctorController");

router.get("/doctors/", DoctorController.getAllData);
router.get("/doctor/:city", DoctorController.getData);
router.get("/doctor/find/:id", DoctorController.getDataById);
router.post("/doctors/field", DoctorController.getDataByField);

module.exports = router;
