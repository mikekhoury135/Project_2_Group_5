const { Make } = require('../../models');

const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.render('home');
// });


router.get('/', (req, res) => {
    // console.log(req.session);
    res.render('homepage');
    // other logic...
});



router.get('/login', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/welcome');
        return;
    }

    res.render('login');

});







router.get('/welcome', (req, res) => {



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




});
















module.exports = router;