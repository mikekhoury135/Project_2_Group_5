const router = require('express').Router();
const { User, Make, Year, Color, MakeYear } = require('../models');
//const withAuth = require('../utils/auth');



router.get('/welcome', async(req, res) => {
    console.log("started")
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
        console.log("found data")
        console.log(returnDatas)
            // const newData = returnDatas.map(
            //     (returnData) => {
            //         returnData.toJSON();
            //     })
            // console.log("Converted to json" +
            //     newData)
            // const makeName = newData.make_name;
            // console.log("" +
            //     makeName)
            // const stringMakeName = JSON.stringify(makeName);
            // console.log("String" +
            //     makeName)
        res.render('car-search', {
            makeDropdown: returnDatas,

            loggedIn: req.session.loggedIn
        })
    });


})

router.get('/', (req, res) => {
    // console.log(req.session);
    res.render('home');
    // other logic...
});

router.get('/login', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/welcome');
        return;
    }
    res.render('login');
})




module.exports = router;