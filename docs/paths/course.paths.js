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
  },
};

export default coursePaths;
