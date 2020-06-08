const http = require("http"); //Modul was Node für uns bereitstellt
const fs = require("fs");

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const index = fs.readFileSync("./index.html");
    response.end(index);
  }
  if (url === "/css/bootstrap.css") {
    const style = fs.readFileSync("./css/bootstrap.css");
    response.writeHead(200, { "Content-Type": "text/css" });
    response.end(style);
  }

  if (url === "/img/sz_strandperle_1440.png") {
    const img1 = fs.readFileSync("./img/sz_strandperle_1440.png");
    response.writeHead(200, { "Content-Type": "plain/png" });
    response.end(img1);
  }

  if (url === "/js/bootstrap.bundle.js") {
    const js = fs.readFileSync("./js/bootstrap.bundle.js");
    response.writeHead(200, { "Content-Type": "script/js" });
    response.end(js);
  }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Knock Knock? Who is there?");
}); //Methode hat callback-Funktion

server.listen("8081", () => console.log("Server lauscht auf 8081"));
