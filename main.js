import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";
const app = express();
app.use(express.json());

app.use("/api/users", router);
dotenv.config();
console.log(process.env.MONGO_URI, "envvv");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
