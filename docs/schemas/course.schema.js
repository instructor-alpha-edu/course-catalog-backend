import { Levels } from "../../models/Course.js";

const courseSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Id of course in ObjectId format",
      example: "64b8f.....",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    imageUrl: {
      type: "string",
    },
    level: {
      type: "string",
      enum: Object.values(Levels),
      default: Levels.BEGINNER,
      example: Levels.BEGINNER,
    },
    teacher: {
      $ref: "#/components/schemas/User",
    },
  },
};

export default courseSchema;
