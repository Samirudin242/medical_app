const {Schedule, User} = require("../models");



class scheduleController {

    static createSchedule(req, res) {
        let dataSchedule = {
            doctorName: req.body.doctorName,
            time: req.body.time,
            date: req.body.date,
            hospital: req.body.hospital,
            location: req.body.location,
            UserId: req.body.UserId,
        }

        Schedule.create(dataSchedule)
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    static getSchedule(req, res) {
        User.findByPk(req.params.id, {
            include: [Schedule]
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch( err => {
            console.log(err);
        })
    }

    static deleteSchedule(req, res) {
        Schedule.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.status(200).json({data, msg: "success"})
        })
        .catch(err => {
            res.status(500).josn(err)
        })
    }

}



module.exports = scheduleController;