var email = document.getElementById('email');
var password = document.getElementById('password');
var authMessage = document.getElementById('authMessage');
var signupButton = document.getElementById("signup");
var signinButton = document.getElementById("Signin");

signinButton.style.display = "none";

function signUp(){
    var users = localStorage.getItem("users");
    if(users === null){
        users = [];
    }
    else{
        users = JSON.parse(users);
    }
    var user = {
        email : email.value,
        password : password.value
    }
    if(email.value === ""){
     if(password.value === ""){
         alert("")
     }   
    }
    else{
        console.log("hello")
    users.push(user);
    users = JSON.stringify(users);
    localStorage.setItem('users',users);

email.value ='';
password.value ='';    
signinButton.style.display = "block";
signupButton.style.display = "none"
    }

}


function login(){
     var users = localStorage.getItem("users");
    if(users === null){
        users = [];
    }
    else{
        users = JSON.parse(users);
    }
    authenticate = false;
    for(var i = 0; i < users.length; i++){
        if (users[i].email === email.value){
            if(users[i].password === password.value){
        // console.log('Login Successfully');
        // authMessage.innerHTML = 'Login Successfully'
        location = "quiz.html"
        authenticate = true;
            }
        }


if (authenticate === false){
    // console.log('Login failed');
    authMessage.innerHTML = 'Login failed'
}
email.value = '';
password.value ='';

setTimeout(function(){
    authMessage.innerHTML = '';
},3000);
}
}