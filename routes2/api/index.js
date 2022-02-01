const router = require('express').Router();

const makeRoutes = require('./make-routes');
const colorRoutes = require('./color-routes');
const yearRoutes = require('./year-routes');


router.use('/makes', makeRoutes);
router.use('/colors', colorRoutes);
router.use('/years', yearRoutes);

module.exports = router;