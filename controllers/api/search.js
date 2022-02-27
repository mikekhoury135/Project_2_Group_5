// const router = require('express').Router();
// const { Make, CarModel, Color, Year, MakeYear } = require('../../models');



// router.get('/:id', (req, res) => {
//     // const make = parseInt(req.query.make)
//     const make = req.params.id;

//     Promise.all([Make.findAll({
//             include: [{
//                     model: Color,
//                 },
//                 {
//                     model: Year,
//                     through: MakeYear,
//                 }
//             ]
//         }), CarModel.findAll({
//             where: {
//                 model_id: parseInt(make)

//             }
//         })])
//         .then((data) => {
//             //data[0] is response from tableA find


//             console.log(data[0]);
//             console.log("----------")
//             console.log(data[1])

//             // res.status(200).send({ models: data[1] });
//             res.render('car-search', {


//                     makeDropdown: data[0],
//                     modelDropdown: data[1],
//                     selectedMake: data[0][make - 1],
//                     loggedIn: req.session.loggedIn
//                 })
//                 // res.status(200).json({ models: data[1] });

//             // data[1] is from tableB
//         })
// })

// router.get('/model/:make/:model', (req, res) => {
//     // const make = parseInt(req.query.make)
//     const make = req.params.make;
//     const model2 = req.params.model;

//     Promise.all([Make.findAll({
//             include: [{
//                     model: Color,
//                 },
//                 {
//                     model: Year,
//                     through: MakeYear,
//                 }
//             ]
//         }), CarModel.findAll({
//             where: {
//                 model_id: parseInt(make)

//             }
//         }),
//         CarModel.findAll({
//             where: {
//                 model_name: model2.toString()

//             }

//         })
//     ]).then((data) => {
//         //data[0] is response from tableA find
//         // res.status(200).send({ models: data[1] });

//         console.log(data);
//         res.render('car-search', {
//                 makeDropdown: data[0],
//                 modelDropdown: data[1],
//                 loggedIn: req.session.loggedIn,
//                 searchResults: data[2],
//                 loggedIn: req.session.loggedIn
//             })
//             // res.status(200).json({ models: data[1] });

//         // data[1] is from tableB
//     })

// })





// module.exports = router;