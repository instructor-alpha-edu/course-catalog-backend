import mongoose from "mongoose";
import "dotenv/config";

export async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("База данных подключена");
  } catch (error) {
    console.log("Произошла ошибка при подключении к базе данных: " + error.message);
  }
}
