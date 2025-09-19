const enrollmentPaths = {
  "/enrollments/{id}": {
    post: {
      summary: "Enroll student to course",
      tags: ["Enrollments"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Course id (ObjectId)",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        201: {
          description: "Student successfully enrolled to course",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Enrollment" },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/enrollments": {
    get: {
      summary: "Get my enrollments",
      tags: ["Enrollments"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "List of courses student is enrolled in",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Course" },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default enrollmentPaths;
