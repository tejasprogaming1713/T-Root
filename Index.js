console.log("Temp VPS Node.js environment running on Ubuntu (Docker)!");
console.log("Everything is working fine. You can install packages and run your bot/app here.");

const http = require("http");

// Use dynamic PORT (IDX, Replit, Docker NEED this)
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Your temporary VPS is running!\n");
});

server.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
