var togg = false;
function change(){
    if(!togg){
        togg = true;
        document.querySelector("#navbar").classList.add('darken-nav');
        document.querySelector("#password").classList.add('darken-input');
        document.querySelector("#username").classList.add('darken-input');
        document.querySelector(".info").classList.add('darken-text');
        document.querySelector("body").classList.add('darken-body');
        document.querySelector(".login-form").classList.add('darken-login');
        document.querySelector(".login-img").classList.add('darken-img');     
        document.querySelector(".below").classList.add('darken-footer');  
        document.querySelector(".btn").classList.add('darken-btn');
        document.querySelector(".forgot").classList.add('darken-forgot');
        var name = document.querySelectorAll(".names");
        for(i=0; i<6; i++){
            name[i].classList.add('darken-names');
        }
        console.log("Dark Mode");
    }
    else{
        togg = false;
        document.querySelector("#navbar").classList.remove('darken-nav');
        document.querySelector("body").classList.remove('darken-body');
        document.querySelector("#password").classList.remove('darken-input');
        document.querySelector("#username").classList.remove('darken-input');
        document.querySelector(".info").classList.remove('darken-text');
        document.querySelector(".login-form").classList.remove('darken-login');
        document.querySelector(".login-img").classList.remove('darken-img');
        document.querySelector(".below").classList.remove('darken-footer');
        document.querySelector(".btn").classList.remove('darken-btn');
        document.querySelector(".login-img").classList.remove('darken-img');
        document.querySelector(".forgot").classList.remove('darken-forgot');
        var name = document.querySelectorAll(".names");
        console.log(name);
        for(i=0; i<6; i++){
            name[i].classList.remove('darken-names');
        }
        console.log("Light Mode");
    } 
}
function popup(){
    alert("You have logged in");
}
function forgot(){
    console.log("You have forgotten your password");
    alert("Bad Memory, Now go and open the console");
}