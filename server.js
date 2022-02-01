// added more requirements based on what we might need

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// sequelize config
const sequelize = require("./config/connection");
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

// app.use(session(sess));


// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
//   });

// variables for log in handbars

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');