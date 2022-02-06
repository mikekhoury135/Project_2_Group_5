const { findAll } = require('../../models/color');

const router = require('express').Router();
const Make = require('../../models/make');



router.get('/', (req, res) => {

    console.log(req.query.make_name)

    Make.findAll({
            where: {
                make_name: req.query.make_name
            }
        })
        .then((dbMakeData) => {
            res.json(dbMakeData);
            res.status(200);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})



module.exports = router;