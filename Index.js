//Server code
const express = require("express");
fs = require('fs');
const app= express();
const port =process.env.PORT || 3000;
const Usernames= ["Conner","James","Fred"]
app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express.static('public'));
app.use(express.json());
app.post('/Uname',(request,response)=>{
//take out
console.log(request.body[0].Username);
if (Usernames.includes(request.body[0].Username)){
    console.log("Login works")
    response.json({"Status":"Pass"})
}
else {console.log("Failed to log in")
    response.json({"Status":"Fail"})
    }
});

app.post('/api',(request,response)=>{
console.log(request.body);
console.log("working");
fs.appendFileSync('database.txt',JSON.stringify(request.body)+",\n");
response.json(request.body)
});
