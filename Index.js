//Server code
const express = require("express");
fs = require('fs');
const app= express();
app.listen(3000, () => console.log("listening on port 3000"));
app.use(express.static('public'));
app.use(express.json());
<<<<<<< Updated upstream
app.post('/api',(request,response)=>{console.log(request.body);
console.log("working");
=======
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
>>>>>>> Stashed changes
fs.appendFileSync('database.json',",\n"+JSON.stringify(request.body));
response.json(request.body)
});
