const jsonServer = require("json-server");
const fs = require("fs");
const os = require("os");
const path = require("path");

fs.copyFile("db.json", os.tmpdir() + "/db.json", function (err) {
  if (err) console.log(err);
  else console.log("copy file succeed to" + os.tmpdir());
});

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
