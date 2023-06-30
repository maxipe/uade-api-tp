import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../package.json";

const options: swaggerJsdoc.OAS3Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CV Api Documentation",
      version: version,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes.ts", "./src/routes/*.ts"],
  
};

export const swaggerSpec = swaggerJsdoc(options)
