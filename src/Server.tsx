import fs from "fs";
import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";

import { Html } from "./Html/Server";

import { ServerStyleSheet } from "styled-components";

import App from "./Components/app";

const port = 3000;
const server = express();
const jsFiles: Array<string> = [];

fs.readdirSync("./dist/assets").forEach((file) => {
  if (file.split(".").pop() === "js") jsFiles.push("/assets/" + file);
});

server.use("/assets", express.static("./dist/assets"));

server.get("*", async (req, res) => {
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(
    <Html scripts={jsFiles}>
      <App />
    </Html>
  );

  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  stream.pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
