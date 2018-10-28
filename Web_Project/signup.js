function validatesignup()

{
  validateform();
  validatepsswd();
}


function validateform(){
 var a=document.forms["myForm"]["FirstName"].value;
 var b=document.forms["myForm"]["lstName"].value;
  var c=document.forms["myForm"]["UserName"].value;
 var d=document.forms["myForm"]["Email"].value;
  var e=document.forms["myForm"]["psswrd1"].value;
  var f=document.forms["myForm"]["psswrd2"].value;
  if(a,b,c,d,e,f=="")
  {
    document.getElementById("signuperr").innerHTML="All fields must be filled";
    return false;
  }
}
function validatepsswd(){
var pss1=document.forms["myForm"]["psswrd1"].value;
var pss2=document.forms["myForm"]["psswrd2"].value;
if(pss1 != pss2)
{
document.getElementById("signuperr").innerHTML="Password must be same";
  return false;
}
return true;
}

