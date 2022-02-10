
const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;


 const SequelizeStore = require('connect-session-sequelize')(session.Store);

 const hbs = exphbs.create({});
 const sess = {
    secret: 'Super ',
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/api/home-routes'));
// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
 