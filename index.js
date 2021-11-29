const path = require('path')
const express = require("express");
const app = express();
const port = 3000;

// const anmolMiddleWare=(req,res,next)=>{
// console.log(req)
// next()
// }

//Public Folder
app.use(express.static(path.join(__dirname,"public")))
//app.use(anmolMiddleWare)


app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

//SEND TEXT
app.get("/about", (req, res) => {
  res.send("About Section");
});

//Send HTML FILE
app.get("/index", (req, res) => {
 // res.send("About Section");
 res.sendFile(path.join(__dirname,'index.html'))
});

//SEND JSON
app.get("/json",(req,res)=>{
    res.json({
        "Anmol":34
    })
})


//ADDING A PARAMETER
app.get("/hello/:name", (req, res) => {
    res.send("Hello World ! "+ req.params.name);
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
