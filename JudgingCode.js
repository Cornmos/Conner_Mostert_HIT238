var Criteria = ["Workability", "Sustainability", "Usability", "Innovation", "Presentation"];
var Discription = ["meets the objectives well and runs without error or bugs","governance, community, portability, supportability, changeability, evolvability and interoperability",
"understandability, buildability, installability, learnability & documentation","works in an imaginative way characterized by a high degree of innovation, and divergent thinkin",
"Posture, gestures, eye contact, and use of the voice"]
class JudgeCriteria{
    constructor(Judgename,Teamname,JudgeCriteria,Score){
        this.Judgename = Judgename;
        this.Teamname = Teamname;
        this.JudgeCriteria = JudgeCriteria;
        this.Score = Score;
}
}

function Validate(){
    var tName= document.getElementById("TeamName").value;
    var work= document.getElementById("Workability").value;
    var sustain= document.getElementById("Sustainability");
    var usable= document.getElementById("Usability");
    var innovate= document.getElementById("Innovation");
    var present= document.getElementById("Presentation");
    var reg = new RegExp('^[0-9]$');
    if(document.getElementById("TeamName").value==""){
        document.getElementById("TeamName").style.border="solid 3px red"; 
    }
    else {
        document.getElementById("TeamName").style.border="solid 3px blue";
    }
    for(var i=0; Criteria.length;i++){
        
        if(reg.test(document.getElementById(Criteria[i]).value-1)==false){
            document.getElementById(Criteria[i]).style.border="solid 3px red";
        }
        else{
            document.getElementById(Criteria[i]).style.border="solid 3px blue";
        }
    }
}
function Unameval(){
    if(document.getElementById("UserName").value==""){
        document.getElementById("UserName").style.border="solid 3px red";
        document.getElementById("Uname").style.visibility="visible";

    }
    else{
        window.location.href = "Form.html";
    }
}