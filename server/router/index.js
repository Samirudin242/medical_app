const router = require("express").Router();
const DoctorController = require("../controller/DoctorController");
const UserController = require("../controller/UserController");
const scheduleController = require("../controller/ScheduleController")

router.get("/doctors/", DoctorController.getAllData);
router.get("/doctor/:city", DoctorController.getData);
router.get("/doctor/find/:id", DoctorController.getDataById);
router.post("/doctors/field", DoctorController.getDataByField);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/edit/:id", UserController.edit);
router.post("/addSchedule", scheduleController.createSchedule);
router.get("/getSchedule/:id", scheduleController.getSchedule)
router.delete("/deleteSchedule/:id", scheduleController.deleteSchedule)
module.exports = router;
