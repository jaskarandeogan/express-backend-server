// to spin up our expressjs server
const express = require("express");
// a middleware to parse the body of incomming requests
const bp = require("body-parser");
// a middleware to allow cross origin requests
const cors = require("cors");
// a middleware to log the requests
const morgan = require("morgan");
//import swaggerUi
const swaggerUI = require("swagger-ui-express");
//import swaggerDocument
const swaggerJsDoc = require("swagger-jsdoc");

// create an expressjs app
const app = express();

// use the middlewares
app.use(morgan("combined"));
app.use(bp.json());
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "A simple Express Todo API",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

// use swagger-Ui-express for your app documentation endpoint
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// import the routes
const routes = require("./routes");

// use the routes
app.use(routes);

// start the server
app.listen(process.env.PORT || 8081);
