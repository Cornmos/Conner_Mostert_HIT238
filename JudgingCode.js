var Criteria = ["Workability", "Sustainability", "Usability", "Innovation", "Presentation"];
var Discription = ["meets the objectives well and runs without error or bugs","governance, community, portability, supportability, changeability, evolvability and interoperability",
"understandability, buildability, installability, learnability & documentation","works in an imaginative way characterized by a high degree of innovation, and divergent thinkin",
"Posture, gestures, eye contact, and use of the voice"];

function Unameval(){
    if(document.getElementById("UserName").value==""){
        document.getElementById("UserName").style.border="solid 3px red";
        document.getElementById("Uname").style.visibility="visible";
    }
    else{
        sessionStorage.setItem("UserName",document.getElementById("UserName").value);
        window.location.href = "Form.html";
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
    if(document.getElementById("TeamName").value==""){
        document.getElementById("TeamName").style.border="solid 3px red";
        counter++;
    }
    else {
        document.getElementById("TeamName").style.border="solid 3px blue";
    }
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
    if(counter==0){
        add2Array(tName,work,sustain,usable,innovate,present)
    }
}
function add2Array(tName,work,sustain,usable,innovate,present){
    var formVal = {
        Username: sessionStorage.getItem("UserName"),
        Teamname: tName,
        Worability: work,
        Sustainability: sustain,
        Usability:usable,
        Innovation: innovate,
        Presentation:present
    };
    localStorage.setItem(document.getElementById("TeamName").value,JSON.stringify(formVal));
    for(var i=0; Criteria.length;i++){
        if(i==Criteria.length){
            break;
        }
        document.getElementById(Criteria[i]).value="";
        document.getElementById("TeamName").value="";
    }
    window.location.href = "FormComplete.html";
    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
    }
}
function finish(){
    //Values are Passed via JSON to Hosting Service Database to be added later
    localStorage.clear()
    window.location.href = "index.html";
    console.log("Data saved to database")



}
