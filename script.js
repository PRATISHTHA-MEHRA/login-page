let signinbtn=document.querySelector('.btn');
let loginbtn=document.querySelector('.login');
let namefield=document.querySelector('.namefield');
let title=document.querySelector('.title');
let para1=document.querySelector('.para1');
let para2=document.querySelector('.register-link p');
let link=document.querySelector('.register-link a');


loginbtn.addEventListener('click',()=>{
    
    namefield.style.display='none';
    
    
    title.innerHTML='WELCOME BACK';
    para1.innerHTML='Sign in to continue your progress';
    signinbtn.innerHTML='Sign In';
   
});