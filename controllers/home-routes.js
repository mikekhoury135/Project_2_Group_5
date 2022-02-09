
const router = require('express').Router();
const { User, Make, Year } = require('../models');
//const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    const makeData = await Make.findAll({ 
        include: [{
            model: User,
            attributes: ['username'],
        },],
    });
    const makes = makeData.map((make) => make.get({
        plain: true
    }));

    res.render('homepage',{
        makes,
        logged_in:req.session.logged_in

    });
});
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
    post = {
        make: "volkswagen",
        color: "black"
    }
    res.render('car-search', {
        post,
        loggedIn: req.session.loggedIn
    })
})
module.exports = router;