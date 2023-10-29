const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults({'noCors': true});

server.use(cors({ origin: 'https://waku-waku-sushi.netlify.app'}));
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
