const router2 = require('express').Router();
const { Make, Model } = require('../../models');


router2.get('/', (req, res) => {
    console.log("searching");

    Make.findAll({
        where: {
            manufacture_name: req.query.make_name

        }
    }).then((data) => {
        console.log(data);
        res.json(data);
        res.status(200);


    }).catch((err) => {
        res.json(err);
    })


})

module.exports = router2;