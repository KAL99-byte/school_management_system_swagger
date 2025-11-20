import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "School Management System",
      version: "1.0.0",
      description: "Swagger documentation for school management system",
    },
  },
  apis: ["./routes/*.js","./swagger/components.js"], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
