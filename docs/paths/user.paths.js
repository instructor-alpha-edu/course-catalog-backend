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
  "/users/me": {
    get: {
      summary: "Get my account",
      tags: ["User"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Returned user successfully",
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
  "/users": {
    get: {
      summary: "Get all users (except admins)",
      tags: ["User"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Returned list of users successfully",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/User" },
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

export default userPaths;
