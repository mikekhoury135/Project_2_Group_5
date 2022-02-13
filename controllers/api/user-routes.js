const router = require('express').Router();
<<<<<<< HEAD

const { User } = require('../../models');






router.post('/signup', async(req, res) => {

=======
const { User } = require('../../models');

router.post('/signup', async(req, res) => {
>>>>>>> feature/mix-routes-login
    console.log('Entered');


    const dbUserData = await User.create({


        username: req.body.username,
        email: req.body.email,
        password: req.body.password


    }).then((data) => {
        console.log(data);
        res.json(data);

        console.log("added");
        res.status(200);
        // req.session.save(() => {
        //     req.session.loggedIn = true;

        //     res.status(200)
        //     res.json({ user: dbUserData, message: 'You are now logged in!' });

        // })

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

<<<<<<< HEAD
// Login
router.post('/login', async(req, res) => {
=======


router.post('/login', async(req, res) => {

>>>>>>> feature/mix-routes-login
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


<<<<<<< HEAD
// req.session.save(() => {
//         req.session.loggedIn = true;

//         res.status(200)
//         res.json({ user: dbUserData, message: 'You are now logged in!' });
//     })
=======
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

>>>>>>> feature/mix-routes-login









router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});









<<<<<<< HEAD


=======
>>>>>>> feature/mix-routes-login
module.exports = router;