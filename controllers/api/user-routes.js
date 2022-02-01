const router = require('express').Router();

const { Users } = require('../../models/');


router.post('/signup/:username/:email/:password', async(req, res) => {

    console.log('Entered');

    const dbUserData = await Users.create({


        username: req.params.username,
        email: req.params.email,
        password: req.params.password


    }).then((data) => {
        console.log(data);
        res.json(data);

        console.log("added")

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
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