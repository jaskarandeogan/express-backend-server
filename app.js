// to spin up our expressjs server
const express = require("express");
// a middleware to parse the body of incomming requests
const bp = require("body-parser");
// a middleware to allow cross origin requests
const cors = require("cors");
// a middleware to log the requests
const morgan = require("morgan");

const routes = require("./routes/index");

const port = 5000;
const app = express();

// use the body parser middleware
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
// use the cors middleware
app.use(cors());
// use the morgan middleware
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("API is healthy :)");
});

app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Server started on port ${port} 🚀`);
});
