import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routeNotFound from "./middleware/notFound.js";

//assign port to a variable
const PORT = process.env.PORT || 4000;

//instantiate the app
const app = express();

//middlewares for cross origin communication
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Root route for sanity check
app.get("/", (req, res) => {
  res.send("API working perfectly");
});

//blog route
app.get("/blog", (req, res) => {
  res.status(200).json({ msg: "get all blogs" });
});

app.get("/blog/:id", (req, res) => {
  res.status(200).json({ msg: "get a single" });
});

app.post("/blog", (req, res) => {
  res.status(201).json({ msg: "create new route" });
});

app.patch("/blog/:id", (req, res) => {
  res.status(200).json({ msg: "update a post" });
});

app.delete("/blog/:id", (req, res) => {
  res.status(200).json({ msg: "Delete a post" });
});

app.use(routeNotFound);

//HTTP STATUS CODES
//200 - an okay response
//201 - new resource created
//400 - Bad request
//404 - page not found
//401 - unauthorised or unauthenticated
//500 - internal server error

//listen on a port
const start = () => {
  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};

start();
