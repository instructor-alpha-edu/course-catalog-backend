import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.js";
import appRoutes from "./routes/routes.js";

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", appRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
