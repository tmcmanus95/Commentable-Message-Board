const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;
const helpers = require("./utils/helpers");

const routes = {
  home: require("./controllers/homepageController"),
  // auth: require("./Commentable-Message-Board/controllers/authController"),
  post: require("./controllers/postsController"),
};

const sequelize = require("./config/connections");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up session middleware
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", routes.home);
app.use("/post", routes.post);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
