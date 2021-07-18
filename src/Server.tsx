import fs from "fs";
import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Html } from "./Html/Server";

import { ServerStyleSheet } from "styled-components";

import App from "./Components/app";

const port = 3003;
const basename = "/adonika";
const server = express();
const jsFiles: Array<string> = [];

fs.readdirSync("./dist/assets").forEach((file) => {
  if (file.split(".").pop() === "js") jsFiles.push("/assets/" + file);
});

server.use("/favicon.ico", express.static("resources/images/favicon.ico"));
server.use("/assets", express.static("./dist/assets"));

server.use(
  basename + "/cvfile",
  express.static("./src/resources/userdata/cv.pdf")
);

server.get(basename + "/userdata", (req, res) => {
  fs.readFile("./src/resources/userdata/data.json", "utf-8", (err, data) => {
    if (err) {
      res.end();
    }

    let json = JSON.parse(data);

    res.send(JSON.stringify(json));
  });
});

server.get("*", async (req, res) => {
  console.log(req.url);

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(
    <Html scripts={jsFiles}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Html>
  );

  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  stream.pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
