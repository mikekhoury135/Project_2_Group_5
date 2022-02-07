const router = require('express').Router();

const userRoutes = require('./api/user-routes')
const homeRoutes = require('./api/home-routes');

router.use('/user', userRoutes);

router.use('/', homeRoutes);


module.exports = router;