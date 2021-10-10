//Server code
const express = require("express");
fs = require('fs');
const app= express();
const port =process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express.static('public'));
app.use(express.json());
app.post('/api',(request,response)=>{console.log(request.body);
console.log("working");
fs.appendFileSync('database.json',",\n"+JSON.stringify(request.body));
response.json(request.body)
});
