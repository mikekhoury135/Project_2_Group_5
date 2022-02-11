const router = require('express').Router();
const { Make, CarModel, Color, Year, MakeYear } = require('../../models');

router.get('/', (req, res) => {
    Make.findAll({
        include: [{
                model: Color,
            },
            {
                model: Year,
                through: MakeYear,
            }
        ]
    }).then((returnDatas) => {

        // const newData = returnDatas.map(
        //     returnData => returnData.toJSON()
        // )

        CarModel.findAll({
            where: {
                model_id: Number(req.query.make)

            }
        }).then((returnDatas2) => {

            // const newDataModel2 = returnDatas2.map(
            //     returnData2 => returnData2.toJSON()
            // )
            // const stringModel = JSON.stringify(newDataModel2.model_name)

            res.render('car-search', {

                modelDropdown: returnDatas2,
                makeDropdown: returnDatas,

                loggedIn: req.session.loggedIn
            })
        })
    })
})


module.exports = router;