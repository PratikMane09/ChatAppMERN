import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on ${PORT}`);
});
