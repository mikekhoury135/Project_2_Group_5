<<<<<<< HEAD
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
=======
const router = require('express').Router();
const { Make, CarModel, Color, Year, MakeYear } = require('../../models');

router.get('/:id', (req, res) => {
    // const make = parseInt(req.query.make)
    const make = +req.params.id;

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
                model_id: parseInt(make)

            }
        })])
        .then((data) => {
            //data[0] is response from tableA find


            console.log(data[0]);
            console.log("----------")
            console.log(data[1])

            // res.status(200).send({ models: data[1] });
            res.render('car-search', {


                    makeDropdown: data[0],
                    modelDropdown: data[1],
                    selectedMake: data[0][make - 1].dataValues.make_name,

                    loggedIn: req.session.loggedIn
                })
                // res.status(200).json({ models: data[1] });

            // data[1] is from tableB
        })

})





module.exports = router;
>>>>>>> feature/mix-routes-login
