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