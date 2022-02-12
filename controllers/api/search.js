const router = require('express').Router();
const { Make, CarModel, Color, Year, MakeYear } = require('../../models');

router.get('/', (req, res) => {
    const make = parseInt(req.query.make)

    Promise.all([Make.findAll({
            include: [{
                    model: Color,
                },
                {
                    model: Year,
                    through: MakeYear,
                }
            ]
        }), CarModel.findAll({
            where: {
                model_id: parseInt(req.query.make)

            }
        })])
        .then((data) => {
            //data[0] is response from tableA find


            console.log(data[0]);
            console.log("----------")
            console.log(data[1])

            res.render('car-search', {


                makeDropdown: data[0],
                modelDropdown: data[1],

                loggedIn: req.session.loggedIn
            })

            // data[1] is from tableB
        })

})





module.exports = router;