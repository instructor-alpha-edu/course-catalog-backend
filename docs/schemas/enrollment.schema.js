const enrollmentSchema = {
  type: "object",
  properties: {
    _id: {
      type: "ObjectId",
      description: "Id of enrollment in ObjectId format",
      example: "64b8f.....",
    },
    student: {
      $ref: "#/components/schemas/User",
    },
    course: {
      $ref: "#/components/schemas/Course",
    },
  },
};

export default enrollmentSchema;
