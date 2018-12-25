import app from "./app";

const port = 3000 || parseInt(process.env.PORT);
const hostname = 'localhost';
const server = app;

server.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});