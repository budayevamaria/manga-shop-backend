import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.js";
import { setupSwagger } from "./docs/swagger.js";
import appRoutes from "./routes/routes.js";

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use("/", appRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  setupSwagger(app);
  console.log(`Server is running on http://localhost:${PORT}`);
});
