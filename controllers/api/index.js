<<<<<<< HEAD
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
=======
<<<<<<<< HEAD:controllers/api/index.js
// brings in the express router
const router = require('express').Router();
const userRoutes = require('./user-routes');
const makeRoutes = require('./make-routes');

const colorRoutes = require('./color-routes');
//brings in the year routes
const yearRoutes = require('./year-routes');
const searchRoutes = require('./search');
========
// const router = require('express').Router();

// const makeRoutes = require('./make-routes');
// const colorRoutes = require('./color-routes');
// const yearRoutes = require('./year-routes');
>>>>>>>> feature/mix-routes-login:routes/api/index.js

router.use('/user', userRoutes);

// router.use('/makes', makeRoutes);
// router.use('/colors', colorRoutes);
// router.use('/years', yearRoutes);

<<<<<<<< HEAD:controllers/api/index.js
router.use('/search', searchRoutes);

module.exports = router;
========
// module.exports = router;
>>>>>>>> feature/mix-routes-login:routes/api/index.js
>>>>>>> feature/mix-routes-login
