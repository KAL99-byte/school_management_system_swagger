import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";

import userRoutes from "./routes/users.routes.js";
import roleRoutes from "./routes/roles.routes.js";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", userRoutes);
app.use("/roles", roleRoutes);


app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Node 24 API!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs → http://localhost:${PORT}/api-docs`);
});
