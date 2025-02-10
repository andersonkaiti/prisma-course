import http, { Server } from "node:http";
import { app } from "./app";

const server: Server = http.createServer(app);

const PORT = Number(process.env.PORT) || 3_000;

app.set("port", PORT);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}!`);
});
