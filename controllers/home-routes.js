const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;