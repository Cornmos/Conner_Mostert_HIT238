var Criteria = ["Workability", "Sustainability", "Usability", "Innovation", "Presentation"];
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
