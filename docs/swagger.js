import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Swagger Schemas
import userSchema from "./schemas/user.schema.js";
import courseSchema from "./schemas/course.schema.js";
import enrollmentSchema from "./schemas/enrollment.schema.js";
// Swagger Paths
import authPaths from "./paths/auth.paths.js";
import userPaths from "./paths/user.paths.js";
import coursePaths from "./paths/course.paths.js";

const swaggerDoc = swaggerJSDoc({
  definition: {
    openapi: "3.1.1",
    info: {
      title: "Course Catalog Application",
      version: "1.0.0",
      description: "API of simple application to work with courses",
    },
    components: {
      schemas: {
        User: userSchema,
        Course: courseSchema,
        Enrollment: enrollmentSchema,
      },
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: { ...authPaths, ...userPaths, ...coursePaths },
  },
  apis: [],
});

export function setupSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
