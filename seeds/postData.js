const { Post } = require("../models/");

const postsData = [
  {
    post_title: "JavaScript Hacks",
    post_content: "Use the .map method to massage data",
  },
  {
    post_title: "JavaScript Hacks 2",
    post_content: "You can make websites do stuff",
  },
  {
    post_title: "Autentication Tips",
    post_content:
      "bcrypt is an awesome node package that streamlines the authentication process, and adds security to your web application. ",
  },
  {
    post_title: "All Aboard",
    post_content: "Expess always reminds me of trains. That's it",
  },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;
