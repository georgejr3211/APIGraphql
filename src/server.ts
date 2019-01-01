import { User } from './models/user.model';
import app from "./app";
import { createConnection } from 'typeorm';

const port = 3000 || parseInt(process.env.PORT);
const hostname = 'localhost';
const server = app;

createConnection({
  type: "mysql",
  host: "localhost",
  database: "graphql_api",
  port: 3306,
  username: "root",
  password: "",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/models/**/*.ts", __dirname + "/models/**/*.js"],
  migrations: [__dirname + "/migrations/**/*.ts", __dirname + "/migrations/**/*.js"]
})
  .then((connection) => {
    console.log('Connected on graphql_api');
  });

server.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});