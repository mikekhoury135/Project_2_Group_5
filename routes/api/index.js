// brings in the express router
const router = require('express').Router();
//brings in the make-routes
const makeRoutes = require('./make-routes');
//brings in the color routes
const colorRoutes = require('./color-routes');
//brings in the year routes
const yearRoutes = require('./year-routes');


router.use('/makes', makeRoutes);
router.use('/colors', colorRoutes);
router.use('/years', yearRoutes);

module.exports = router;