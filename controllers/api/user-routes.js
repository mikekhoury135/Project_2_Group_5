const router = require('express').Router();

const { User } = require('../../models/');


router.post('/signup/:username/:password', async(req, res) => {

    console.log('Entered');
    try {
        const dbUserData = await User.create({


            user_name: req.params.username,
            password: req.params.password


        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async(req, res) => {

    console.log('Entered');
    try {
        const dbUserData = await User.create({


            user_name: req.params.username,
            email: req.params.email,
            password: req.params.password


        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;