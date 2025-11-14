// -------------------------------
// T-Root Main Server File
// -------------------------------

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Allow __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.json());

// Default PORT
const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>T-Root Server Running 🚀</h1>
    <p>Your environment is ready.</p>
    <p>You can install packages and run your bot/app here.</p>
    <p>Server up on port: <b>${PORT}</b></p>
  `);
});

// Example API route (optional)
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "T-Root API Working ✔️",
    port: PORT,
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log("============================================");
  console.log("Everything is working fine!");
  console.log("You can install packages and run your bot/app here.");
  console.log(`Server started on port ${PORT}`);
  console.log("============================================");
});
