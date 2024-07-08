const { Sequelize } = require("sequelize");
require("dotenv").config();

const DATABASE_URL =
  "postgresql://techie_dev_09:IyoWOLFkyFOvxTgF88Z3WBsItSS3oQeZ@dpg-cq3t6obqf0us73dngbi0-a.oregon-postgres.render.com/hng_internship_task_3";

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // This line may be necessary to avoid self-signed certificate errors
    },
  },
});

// Test the connection
sequelize
  .authenticate()
  .then(() =>
    console.log("Database connection has been established successfully.")
  )
  .catch((err) => console.log("Unable to connect to the database:", err));

module.exports = sequelize;
