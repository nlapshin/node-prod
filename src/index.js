const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 4000;
const hostname = os.hostname();

const server = http.createServer(async (req, res) => {
  return res.end(`Hello world! My hostname/container ID is: ${hostname}`);
});

server.listen(PORT, () => {
  console.log('Server started at', PORT);
});
