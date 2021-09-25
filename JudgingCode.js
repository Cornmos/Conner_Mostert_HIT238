var indno = 0;
var Criteria = ["Workability", "Sustainability and Maintainability", "Usability", "Innovation", "Presentation"];
var Discription = ["meets the objectives well and runs without error or bugs","governance, community, portability, supportability, changeability, evolvability and interoperability",
"understandability, buildability, installability, learnability & documentation","works in an imaginative way characterized by a high degree of innovation, and divergent thinkin",
"Posture, gestures, eye contact, and use of the voice"]
function first(){
    document.getElementById("Criteria").innerHTML="ITCode Fair Judgetable";
    document.getElementById("Discription").innerHTML="Enter first Team Name to begin";
    document.getElementById("Score").style.visibility="hidden";
    document.getElementById("Submit").innerHTML="Start";
    document.getElementById("Next").style.visibility="hidden";

    
}
function fn1(){
    document.getElementById("TeamName").style.visibility="hidden";
    document.getElementById("Criteria").innerHTML=Criteria[indno]
    document.getElementById("Discription").innerHTML=Discription[indno];
    document.getElementById("Submit").innerHTML="Submit"
    document.getElementById("Score").style.visibility="visible";
    
}
function fn2(){
    //document.getElementById("Score").value save value
    document.getElementById("Score").value="";
    if (indno <= 3){
        indno += 1;
        fn1()
    }
    else {
        document.getElementById("Criteria").innerHTML="Task Complete";
        document.getElementById("Discription").innerHTML="Enter New Team Name";
        document.getElementById("TeamName").style.visibility="Visible";
        document.getElementById("Score").style.visibility="hidden";
        document.getElementById("Submit").style.visibility="hidden";
        document.getElementById("Next").style.visibility="visible";
    }
}
function fn3(){
    //send score to database
    document.getElementById("Score").style.visibility="visible";
    document.getElementById("Submit").style.visibility="visible";
    document.getElementById("Next").style.visibility="hidden";
    indno=0;
    fn1(); 
}