const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.argv[2] || process.env.PORT || 4173);
const host = "0.0.0.0";

const contentTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.resolve(root, requested.replace(/^\/+/, ""));

  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const type = contentTypes[path.extname(filePath)] || "application/octet-stream";
  res.writeHead(200, { "content-type": `${type}; charset=utf-8` });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Bloom running at http://${host}:${port}/`);
});
