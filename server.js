const path = require('path');
const express = require('express');
<<<<<<< HEAD
const exphbs = require('express-handlebars');

const routes = require('./controllers');

const routes2 = require('./controllers/api');
const sequelize = require('./config/connection');
const seeds = require("./seeds")
=======
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');


>>>>>>> feature/mix-routes-login
const app = express();
const PORT = process.env.PORT || 3000;




const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({ helpers });
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const hbs = exphbs.create({});
// session

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

<<<<<<< HEAD
app.use(routes2);


=======

// turn on connection to db and server
>>>>>>> feature/mix-routes-login
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});