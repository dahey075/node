const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods.js');
const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [goodsRouter]);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

// app.post("/", (req,res) => {
//   console.log(req.body);

//   res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
// })

// app.get("/", (req,res) => {
//   console.log(req.query);

//   res.json({
//     "keke":"caca"
//   });
// })

// app.get("/:id", (req,res) => {
//   console.log(req.params);

//   res.send("id URL이 정상적으로 반환되었습니다.");
// })
