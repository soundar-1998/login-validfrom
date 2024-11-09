const nameInput=document.querySelector("#name");//0
const email= document.querySelector("#email"); //1
const message= document.querySelector("#message");//2 
const success= document.querySelector("#success");

const errorNodes= document.querySelectorAll(".error"); 
function ValidateForm(){

clearmessage();
let errorFlag=false;
if (nameInput.value == "")
    {
        errorNodes[0].innerHTML="name cannot be blank";
        errorFlag=true;
}
if (email.value.length < 1)// or length < 1 two typ of value function 
    {
        errorNodes[1].innerText="Email cannot be blank";
        errorFlag=true;
}
if(emailIsValid(email.value)== false)
    {
errorNodes[1].innerText="Ivalid Email";
errorFlag=true;
}
 
 if (message.value.length<1)
       {
              errorNodes[2].innerText="Invalid message format";
              errorFlag=true;
       
     }

if(errorFlag == false){
    success.innerHTML=" Form  validation successfully";
    nameInput.value="";
    email.value="";
    message.value="";
}

}

//function definition
function clearmessage() 
{
for(let i=0; i<errorNodes.length;i++){
 
    errorNodes[i].innerText="";
}
}
//function throw received by k1
function emailIsValid(k1)
{
let pattern=/\S+@\S+\.\S+/; //abc123@gmail.com
return pattern.test(k1);
}
