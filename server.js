/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const express = require("express");
const path = require("path");

const app = new express();

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/server_side_ua_sniffing.png", (req, res) => {
  let image = "red.png";
  if (
    req
      .get("User-Agent")
      .toLowerCase()
      .indexOf("chrome") > -1
  ) {
    image = "green.png";
  }

  res.status(302).redirect(image);
});

app.listen(8080);
