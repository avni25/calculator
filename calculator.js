const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


// homepage localhost:3000
app.get("/", (req, res)=>{
    // res.send("hello");
    res.sendFile(__dirname + "/index.html");

});




// what to do when press calculate button
app.post("/cal1", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2; 
    console.log(req.body);   
    res.send("result is "+result);
});

// what to do when press calculate 2 button
app.post("/cal2", function(req, res){
    var num1 = Number(req.body.num3);
    var num2 = Number(req.body.num4);
    var result = num1 + num2;    
    res.send("result is "+result);
});



app.listen(3000,()=>{
    console.log("server is running on port 3000");
});





