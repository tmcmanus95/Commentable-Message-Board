const sequelize = require("../config/connections");

const seedPosts = require("./postData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database Synced -----\n");

  await seedUser();
  console.log("\n----- User Seeded -----\n");

  await seedPosts();
  console.log("\n----- Posts Seeded -----\n");

  process.exit(0);
};

seedAll();
