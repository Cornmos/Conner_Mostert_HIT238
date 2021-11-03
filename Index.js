//Server code
const express = require("express");
fs = require('fs');
const app= express();
const port =process.env.PORT || 3000;
const Usernames= ["Conner","James","Fred"] //Server database of Users
app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express.static('public'));
app.use(express.json());
app.post('/Uname',(request,response)=>{ //Request from the Client
if (Usernames.includes(request.body[0].Username)){ //Check if the user in Server database
    console.log("Login works")
    response.json({"Status":"Pass"})
}
else {console.log("Failed to log in")
    response.json({"Status":"Fail"})
    }
});
app.post('/api',(request,response)=>{ //Packet sent from client with the Server
console.log(request.body);
fs.appendFileSync('database.json',",\n"+JSON.stringify(request.body));
response.json(request.body)
});
