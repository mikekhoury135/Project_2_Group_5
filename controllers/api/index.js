const router2 = require('express').Router();

const makeRoutes = require('./make-routes');
const colorRoutes = require('./color-routes');
const yearRoutes = require('./year-routes');
const { append } = require('express/lib/response');




router2.use('/api/makes', makeRoutes);
router2.use('/api/colors', colorRoutes);
router2.use('/api/years', yearRoutes);


module.exports = router2;