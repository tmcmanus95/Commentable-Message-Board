const User = require("./User");
const Post = require("./Post");

// User.hasMany(Game, {
//   foreignKey: "game_id",
//   onDelete: "CASCADE",
// });

// Game.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

module.exports = { User, Post };
