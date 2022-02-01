const router = require('express').Router();

const { Users } = require('../../models/');






router.post('/signup', async(req, res) => {

    console.log('Entered');

    const dbUserData = await Users.create({


        username: req.body.username,
        email: req.body.email,
        password: req.body.password


    }).then((data) => {
        console.log(data);
        res.json(data);

        console.log("added")
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200)
            res.json({ user: dbUserData, message: 'You are now logged in!' });

        })

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Login
router.post('/login/:email/:password', async(req, res) => {


    try {
        const dbUserData = await Users.findOne({
            where: {
                email: req.params.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.params.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200)
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})






















module.exports = router;