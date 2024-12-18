const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("API is running"));

const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);
