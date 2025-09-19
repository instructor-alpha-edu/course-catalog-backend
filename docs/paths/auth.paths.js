const authPaths = {
  "/auth/register": {
    post: {
      summary: "Register new student",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                firstName: {
                  type: "string",
                  example: "John",
                },
                lastName: {
                  type: "string",
                  example: "Doe",
                },
                email: {
                  type: "string",
                  example: "example@mail.kz",
                },
                password: {
                  type: "string",
                  example: "Qwerty123!",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Student successfully registered",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Новый студент был успешно зарегистрирован",
                  },
                  user: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
        409: {
          description: "Email already used",
        },
        422: {
          description: "Failed to validation",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "example@mail.kz",
                },
                password: {
                  type: "string",
                  example: "Qwerty123!",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successfull login, returns JWT",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhjZDQwZGQ4ODdiYzg3N2Q5YTA5OTQy...",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid email or password",
        },
        422: {
          description: "Failed to validation",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default authPaths;
