console.log("Temp VPS Node.js environment running on Ubuntu (Docker)!");
console.log("Everything is working fine. You can install packages and run your bot/app here.");

// Example: basic HTTP server (optional)
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Your temporary VPS is running!\n");
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});
