const { Sequelize } = require("sequelize");
require("dotenv").config();

const DATABASE_URL = `postgresql://techie_dev_09:IyoWOLFkyFOvxTgF88Z3WBsItSS3oQeZ@dpg-cq3t6obqf0us73dngbi0-a/hng_internship_task_3`;

const sequelize = new Sequelize({
  dialect: "postgres",
  url: DATABASE_URL,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Test the connection
sequelize
  .authenticate()
  .then(() =>
    console.log("Database connection has been established successfully.")
  )
  .catch((err) => console.log("Unable to connect to the database"));

module.exports = sequelize;
