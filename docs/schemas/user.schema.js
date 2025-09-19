import { Roles } from "../../models/User.js";

const userSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Id of user in ObjectId format",
      example: "64b8f.....",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
      example: "Qwerty123!",
    },
    role: {
      type: "string",
      enum: Object.values(Roles),
      default: Roles.STUDENT,
      example: Roles.STUDENT,
    },
  },
};

export default userSchema;
