const userPaths = {
  "/users/make/teacher/{id}": {
    patch: {
      summary: "Make teacher",
      tags: ["User"],
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Student change role to teacher successfully",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
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

export default userPaths;
