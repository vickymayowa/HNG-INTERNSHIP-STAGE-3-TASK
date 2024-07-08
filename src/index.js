require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/authRoutes");
const organisationRoutes = require("./routes/organisationRoutes");
const userRoutes = require("./routes/userRoutes");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to HNG INTERNSHIP STAGE 3 TASK",
    status: true,
  });
});

// API routes
app.use("/auth", authRoutes);
app.use("/api/organisations", organisationRoutes);
app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");

    await sequelize.sync({ alter: true });
    console.log("Database synchronized...");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use`);
      } else {
        console.error("Server error:", err);
      }
    });
  } catch (err) {
    console.error("Unable to connect to the database");
  }
};

startServer();

module.exports = app;
