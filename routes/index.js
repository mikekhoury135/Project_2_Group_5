const router = require('express').Router();
const { UPSERT } = require('sequelize/dist/lib/query-types');
const apiRoutes = require('./api');
const { Users } = require('./users');
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});



app.post('/login/:username&:email&:password', (req, res) => {
    Users.create({
        username: req.params.username
            // placeholder for username
            ,
        email: req.params.email,
        password: req.params.password
            // placeholder for password
    })


})

app.listen(process.env || PORT, () => { "server started on port" + PORT });

module.exports = router;