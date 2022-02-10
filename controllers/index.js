const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('./api/home-routes');

const userRoutes = require('./api/user-routes');
router.use('/user', userRoutes);


router.use('/', homeRoutes);


// router.use('/homeroutes', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;