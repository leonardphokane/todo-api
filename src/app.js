const express = require('express');
const { swaggerUi, specs } = require('./models/config/swagger');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

/**
 * @swagger
 * /:
 *   get:
 *     summary: API info
 *     responses:
 *       200:
 *         description: Basic API information
 */
app.get('/', (req, res) => {
  res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: API is healthy
 */
app.get('/health', (req, res) => res.json({ status: "ok" }));

// Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// Task routes
app.use("/tasks", taskRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
