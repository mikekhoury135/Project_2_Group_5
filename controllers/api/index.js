// brings in the express router
const router = require('express').Router();
const userRoutes = require('./user-routes');
const makeRoutes = require('./make-routes');

const colorRoutes = require('./color-routes');
//brings in the year routes
const yearRoutes = require('./year-routes');
// const searchRoutes = require('./search');

router.use('/user', userRoutes);

router.use('/makes', makeRoutes);
router.use('/colors', colorRoutes);
router.use('/years', yearRoutes);

// router.use('/search', searchRoutes);

module.exports = router;