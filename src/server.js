import Express from "express";
import cors from "cors";
import productsRouter from "./api/products/index.js";
import {
  genericErrorHandler,
  badRequestHandler,
  unauthorizedHandler,
  notfoundHandler,
  forbiddenErrorHandler,
} from "./errorHandlers.js";

const server = Express();

// ************************************* MIDDLEWARES **********************************
server.use(cors());
server.use(Express.json());

// ************************************** ENDPOINTS ***********************************
server.use("/products", productsRouter);

// server.get("/test", (req, res, next) => {
//   res.status(201).send({ message: "TEST SUCCESSFULL" })
// })

// ************************************* ERROR HANDLERS *******************************
server.use(badRequestHandler); // 400
server.use(unauthorizedHandler); // 401
server.use(forbiddenErrorHandler); // 403
server.use(notfoundHandler); // 404
server.use(genericErrorHandler); // 500

export default server;
