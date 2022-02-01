const router = require('express').Router();

const { User } = require('../../models');






router.post('/signup', async(req, res) => {

    console.log('Entered');

    const sentDataHolder = req.body;

    const username = sentDataHolder.username;

    const email = sentDataHolder.email;

    const password = sentDataHolder.password;

    const dbUserData = await User.create({


        username: username,
        email: email,
        password: password


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
router.post('/login', async(req, res) => {

    const sentDataHolder = req.body;

    const email = sentDataHolder.email;

    const password = sentDataHolder.password;

    try {
        const dbUserData = await User.findOne({
            where: {
                email: email,
            },
        })
        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        if (validPassword && dbUserData) {
            console.log('User added')
            res.status(200);
            res.json({ message: "user logged in" });
            res.json(dbUserData);
        }
    }

    // req.session.save(() => {
    //         req.session.loggedIn = true;

    //         res.status(200)
    //         res.json({ user: dbUserData, message: 'You are now logged in!' });
    //     })
    catch {
        (err) => {
            console.log(err);
            res.status(500).json(err);
        }
    }
})





















module.exports = router;