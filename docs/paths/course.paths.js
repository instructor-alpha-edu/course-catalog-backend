const coursePaths = {
  "/courses": {
    get: {
      summary: "Get all courses",
      tags: ["Courses"],
      responses: {
        200: {
          description: "List of all courses",
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
    post: {
      summary: "Create new course",
      tags: ["Courses"],
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "description", "level", "imageUrl"],
              properties: {
                title: {
                  type: "string",
                  example: "Node.js Basics",
                },
                description: {
                  type: "string",
                  example: "Introduction to Node.js for beginners",
                },
                level: {
                  type: "string",
                  enum: ["beginner", "intermediate", "advanced"],
                  example: "beginner",
                },
                imageUrl: {
                  type: "string",
                  example: "https://example.com/course-image.png",
                },
                teacherId: {
                  type: "string",
                  description: "Teacher id (ObjectId) — required if creator is not teacher",
                  example: "66cd40dd887bc877d9a09942",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Course successfully created",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Course" },
            },
          },
        },
        400: {
          description: "Invalid teacherId (user is not a teacher)",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default coursePaths;
