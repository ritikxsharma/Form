
var length = false;
var match = false;

function verifyConstraint(){  

   var input = document.getElementById("pwd").value;  

   if(input.length == 0){
      document.getElementById("cnf_pwd").setAttribute("name" , "lock-open-outline");
      length = false;
      return false;
   }
   
   else if(input.length < 8) {
      document.getElementById("pwd").focus();
      length = false;
   }

   else{
      length = true;
   }
}  

function passwordMatch() {

   if (document.getElementById("pwd").value == 
      document.getElementById("cnf_pwd").value  && length==true) {
     
      document.getElementById("cnf_pwd_icon").setAttribute("name" , "lock-closed-outline");
      match = true;

   } 
   
   else {
      document.getElementById("cnf_pwd_icon").setAttribute("name" , "lock-open-outline");
      match = false;
   }
}


function togglePassword(x){

   var input;
   var status
   if(x==1){
      input = document.getElementById("pwd");
      status = document.getElementById("eye1")
   }
   else{
      input = document.getElementById("cnf_pwd");
      status = document.getElementById("eye2")
   }

   if( input.type == 'password' ) {
      input.type = 'text';
      status.setAttribute("name" , "eye-off-outline");
   }

   else{
      input.type = 'password';
      status.setAttribute("name" , "eye-outline");
   }
}


function submitCheck() {

   

   if(document.getElementById("fullname").value == ""){
      alert("Enter Full Name");
      document.getElementById("fullname").focus();
      return false;
   }


   else if(document.getElementById("email").value == ""){
      alert("Enter Email");
      document.getElementById("email").focus();
      return false;
   }
   
   else if(document.getElementById("pwd").value == ""){
      alert("Enter Password");
      document.getElementById("pwd").focus();
      return false;
   }

   else if( length == false ) {
      alert("Length of password must be atleast 8")
      document.getElementById("pwd").focus();
      return false;
   }

   else if( length==true && ( match == true ) ){
      return true;
   }

   else{
      alert("Password not matching");
      document.getElementById("cnf_pwd").focus();
      return false;
   }
      
}

function chckString()
{ 
   var letters = /^[A-Za-z]+$/;
   if(document.getElementById('fullname').value.match(letters) || document.getElementById('fullname').value=='')
      return true;
   else
   {
      alert('Please input alphabet characters only');
      return false;
   }
}