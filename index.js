const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const routes = {
  home: require("./controllers/homepageController"),
  auth: require("./controllers/authController"),
  post: require("./controllers/postsController"),
};

const sequelize = require("./config/connection");

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

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use routes
app.use("/", routes.home);
app.use("/auth", routes.auth);
app.use("/post", routes.post);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
