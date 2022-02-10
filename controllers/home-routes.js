const router = require('express').Router();
const { User, Make, Year } = require('../models');
//const withAuth = require('../utils/auth');



router.get('/welcome', async(req, res) => {
    Make.findAll({
        attributes: ['id', 'make_name']
    }).then((returnDatas) => {

        const newData = returnDatas.map(
            returnData => returnData.toJSON()
        )

        console.log(newData);
        res.render('car-search', {

            makeDropdown: newData,

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
    res.render('login');
    if (req.session.loggedIn) {
        res.redirect('/welcome');
        return;
    }

})




module.exports = router;