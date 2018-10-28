document.getElementById("t").innerHTML=new Date();
function IsValid(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
      return alert("Successfully loggged in");
    }
    else{        
      return alert("Captcha does not match");
    }
}
function CaptchaGenerator(){
   var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
   var i;
   for (i=0;i<6;i++){
     var a = alpha[Math.floor(Math.random() * alpha.length)];
     var b = alpha[Math.floor(Math.random() * alpha.length)];
     var c = alpha[Math.floor(Math.random() * alpha.length)];
     var d = alpha[Math.floor(Math.random() * alpha.length)];
     var e = alpha[Math.floor(Math.random() * alpha.length)];
     var f = alpha[Math.floor(Math.random() * alpha.length)];
     var g = alpha[Math.floor(Math.random() * alpha.length)];
   }
  var res = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
  document.getElementById("mainCaptcha").value = res;
}

function removeSpaces(string){
  return string.split(' ').join('');
}
function Validatelogin()
{
    var x,y;
    x=document.getElementById("User").value;
    y=document.getElementById("pass").value;
    if(x=="")
    {
    document.getElementById("error").innerHTML="user id is not fill*";
    }
    else if(y=="")
    {
        document.getElementById("error").innerHTML="Password should be filled";
    }
    else if(x==""&& y==""){
        document.getElementById("error").innerHTML="Both fields should be filled";
    }
} 

function login()
{
  Validatelogin();
  IsValid();


}