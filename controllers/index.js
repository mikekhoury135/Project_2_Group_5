const router = require('express').Router();
<<<<<<< HEAD

const userRoutes = require('./api/user-routes')
const homeRoutes = require('./api/home-routes');

router.use('/user', userRoutes);
=======
const apiRoutes = require('./api/index');

const homeRoutes = require('./home-routes');

// const userRoutes = require('./api/user-routes');
// router.use('/user', userRoutes);

>>>>>>> feature/mix-routes-login

router.use('/', homeRoutes);


<<<<<<< HEAD
=======
// router.use('/homeroutes', homeRoutes);
router.use('/api', apiRoutes);


>>>>>>> feature/mix-routes-login
module.exports = router;