const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});



router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/welcome', (req, res) => {
    res.render('car-search');
})


module.exports = router;