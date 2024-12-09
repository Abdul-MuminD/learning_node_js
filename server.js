//import express
import express from 'express'

//assign port to a variable
const PORT = 4000

//instantiate the app
const app = express();

app.get('/user',(req,res)=>{
    res.send('name=ali, email=ali@ex.com, age=20');
});

app.get('/post',(req,res)=>{

    res.send(
        'posts:{post1: {title:title1,image:image1,content:content1}, post2: {title:title2,image:image2,content:content2}}'
    );
})

//listen on a port
app.listen(PORT,() => {
console.log (`server listening on port http://localhost:${PORT}`);
})
