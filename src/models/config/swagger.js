const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "Simple CRUD API for tasks"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server"
      }
    ]
  },
  // 👇 Make sure this path matches your routes folder
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
