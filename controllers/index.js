const router = require('express').Router();

const homeRoutes = require('./api/home-routes');

const userRoutes = require('./api/user-routes')


router.use('/', homeRoutes);


router.use('/', userRoutes);



module.exports = router;