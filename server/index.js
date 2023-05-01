const app = require("./app");
const PORT = 4000;
const hostNmae = "127.0.0.1";
const http = require("http");
const server = http.createServer(app);

server.listen(PORT, hostNmae, () => {
    console.log(`Server started with http://${hostNmae}:${PORT}`);
});