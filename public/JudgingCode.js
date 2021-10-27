var Criteria = ["Workability", "Sustainability", "Usability", "Innovation", "Presentation"];
function Unameval(){
    const Username= document.getElementById("UserName").value;
    const jUsername = [{"Username": Username}]
    if(Username==""){
        document.getElementById("UserName").style.border="solid 3px red";
        document.getElementById("Uname").style.visibility="visible";
    }
    else{
<<<<<<< Updated upstream
        sessionStorage.setItem("UserName",document.getElementById("UserName").value);
        window.location.href = "Form.html";
=======
        sessionStorage.setItem("UserName",Username); 
        //save in session storage to use on a different page without loosing variable
        const option = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jUsername)
          };
        return option
>>>>>>> Stashed changes
    }
}
function Validate(){
    var tName= document.getElementById("TeamName").value;
    var work= document.getElementById("Workability").value;
    var sustain= document.getElementById("Sustainability").value;
    var usable= document.getElementById("Usability").value;
    var innovate= document.getElementById("Innovation").value;
    var present= document.getElementById("Presentation").value;
    var reg = new RegExp('^[0-9]$');
    counter=0;
    //teamname validate
    if(document.getElementById("TeamName").value==""){
        document.getElementById("TeamName").style.border="solid 3px red";
        counter++;
    }
    else {
        document.getElementById("TeamName").style.border="solid 3px blue";
    }
    //Entered values validate
    for(var i=0; Criteria.length;i++){
        if(i==Criteria.length){
            break;
        }
        
        if(reg.test(document.getElementById(Criteria[i]).value-1)==false){
            document.getElementById(Criteria[i]).style.border="solid 3px red";
            counter++;
        }
        else{
            document.getElementById(Criteria[i]).style.border="solid 3px blue";
        }
    }
    console.log(counter)
    // counter = 0 if validation passes
    if(counter==0){
        //here the post request to server
            const data = {
                Username: sessionStorage.getItem("UserName"),
                Teamname: tName,
                Worability: work,
                Sustainability: sustain,
                Usability:usable,
                Innovation: innovate,
                Presentation:present
            };
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              };  
            
            for(var i=0; Criteria.length;i++){ //Clear previos selections
                if(i==Criteria.length){
                    break;
                }
                document.getElementById(Criteria[i]).value="";
                document.getElementById("TeamName").value="";
            }
            return options //the request to be sent
        }}
        
        
async function asyncCall() {
    const result = await Validate();
    const response = await fetch('/api', result); //Sends the request
    const json = await response.json();
    window.location.href = "FormComplete.html";//Load next page
    console.log(json);
    }

function finish(){
    window.location.href = "index.html";

}

async function UnameCheck(){
    const Uname = await Unameval();
    const Tresponse = await fetch('/Uname', Uname);
    const isthisreal= await Tresponse.json()
    if (isthisreal.Status=="Pass"){
        window.location.href = 'Form.html';
        console.log("Success Success")
    }
    else if (isthisreal.Status=="Fail"){
        console.log("Fail success")
    }
    else{
        console.log("Fail fail")
    };
    console.log(isthisreal.Status);
    /*if (isthisreal.Status=="Pass"){
        Window.location.href = 'Form.html';
    }
    else if (isthisreal.Status=="Fail"){
        console.log("Fail success")
    }
    else{
        console.log("Fail fail")
    }*/
        /*if (response.body==true){
            Window.location.href = 'Form.html';
            console.log("Received true")

        }
        else {
            console.log("received failed")
        }

    })*/
}

