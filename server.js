// クッキーを返すexpressサーバー
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/cookie", (req, res) => {
  res.cookie("cookie" + String(Date.now()), Date.now(), { maxAge: 9000 });
  res.send("<script>location.assign('/');</script>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
