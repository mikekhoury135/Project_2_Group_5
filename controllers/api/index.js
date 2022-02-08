const router2 = require('express').Router();

const makeRoutes = require('./make-routes');
const colorRoutes = require('./color-routes');
const yearRoutes = require('./year-routes');
const { append } = require('express/lib/response');
const searchRoutes = require('./search');



router2.use('/api/makes', makeRoutes);
router2.use('/api/colors', colorRoutes);
router2.use('/api/years', yearRoutes);
router2.use('/api/search', searchRoutes);

module.exports = router2;