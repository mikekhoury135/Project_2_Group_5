const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {
    try{ 
    const userData = await User.create(req.body);
        req.session.save(() => {
            eq.session.user_id = userData.id;
            req.session.loggedIn = true;
            res.status(200).res.json(userData);
        });
    } catch(err) {
        
        res.status(400).json(err);
    }
})
// // Login
// router.post('/login', async(req, res) => {
//     try {
//         const dbUserData = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });
//         if (!dbUserData) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect email or password. Please try again!' });
//             return;
//         }
//         const validPassword = await dbUserData.checkPassword(req.body.password);
//         if (!validPassword) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect email or password. Please try again!' });
//             return;
//         }
//         // Once the user successfully logs in, set up the sessions variable 'loggedIn'
//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res
//                 .status(200)
//                 .json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });
// module.exports = router;




















module.exports = router;