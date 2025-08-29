import mongoose from "mongoose";

export const Levels = Object.freeze({
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    enum: Object.values(Levels),
    default: Levels.BEGINNER,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Course = mongoose.model("Course", courseSchema);
