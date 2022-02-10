const router = require('express').Router();
const { Make, CarModel } = require('../../models');

router.get('/', (req, res) => {
    Make.findAll({
        attributes: ['id', 'make_name']
    }).then((returnDatas) => {

        const newData = returnDatas.map(
            returnData => returnData.toJSON()
        )

        CarModel.findAll({
            where: {
                model_id: req.query.make

            }
        }).then((returnDatas2) => {

            const newDataModel2 = returnDatas2.map(
                returnData2 => returnData2.toJSON()
            )
            console.log(newDataModel2)
            res.render('car-search', {

                modelDropdown: newDataModel2,
                makeDropdown: newData,

                loggedIn: req.session.loggedIn
            })
        })
    })
})