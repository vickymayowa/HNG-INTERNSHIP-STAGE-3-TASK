const { Sequelize } = require("sequelize");
require("dotenv").config();

const DATABASE_URL = process.env.POSTGRES_DATABASE_URL;
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
  .catch((err) => console.log("Unable to connect to the database"));

module.exports = sequelize;
