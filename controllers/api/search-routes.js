const router2 = require('express').Router();
const { Make, Carmodel } = require('../../models');


router2.get('/', (req, res) => {
    Make.findAll({
        attributes: ['id', 'manufacture_name']
    }).then((returnDatas) => {

        const newData = returnDatas.map(
            returnData => returnData.toJSON()
        )

        Carmodel.findAll({
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
        });




    });




})

// if (req.query.make) {
//     Model.findAll({
//         where: {
//             id: req.query_name

//         }
//     }).then((data) => {
//         console.log(data);
//         res.json(data);

//         postMake = res.json(data);
//         res.render('')
//         res.status(200);


//     }).catch((err) => {
//         res.json(err);
//     })

// }


module.exports = router2;