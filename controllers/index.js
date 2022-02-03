const router = require('express').Router();

const makeRoutes = require('./api/make-routes');
const colorRoutes = require('./api/color-routes');
const yearRoutes = require('./api/year-routes');
const userRoutes = require('./api/user-routes')
const homeRoutes = require('./api/home-routes');

router.use('/makes', makeRoutes);
router.use('/colors', colorRoutes);
router.use('/years', yearRoutes);

router.use('/user', userRoutes);

router.use('/', homeRoutes);


module.exports = router;