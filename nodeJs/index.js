const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const signupRouter = require("./Router/singup");
const signinRouter = require("./Router/signin");
const productRouter = require("./Router/Product");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/signup", signupRouter);
app.use("/login", signinRouter);
app.use("/Product", productRouter);

app.listen(3001, () => {
  console.log("Server listening on port 3001...");
});
