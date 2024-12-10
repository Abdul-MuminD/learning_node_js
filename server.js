import dotenv from "dotenv";
dotenv.config();

import express from "express";

//assign port to a variable
const PORT = process.env.PORT || 4000;

//instantiate the app
const app = express();

//middlewares to handle json data and form data respectively
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.json({ students:{
    student1:{
        name:'Mumin',
        class:'Middle',
        age:20
    },
    student2:{
        name:'Abdul',
        class:'Lower',
        age:16
    }
}});
});



//listen on a port
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
