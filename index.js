const c = document.getElementById("caret");
const me = document.getElementById("me");
const navbar = document.getElementById('navbar')
const text = ["a software developer ", "a high-schooler ", "a thinker ", "a footballer "];
window.i = 0
window.j = 0

setInterval(
    () => {
        c.classList.toggle('invisible') ;
    }, 300)
anim = (text) =>{
    i = window.i
    j = window.j
    if (i>0){    
        me.innerHTML += text[j][i-1];
    }else if(i <= 0){
        me.innerHTML = me.innerHTML.slice(0, -i)    
    }
    if (i >text[j].length-1){
        window.i = - text[j].length
    }
    if (me.innerHTML == "" ){
        window.j += 1
    }
    if (window.j >= text.length){
        j=0
    }
    window.i += 1; 
}
setInterval(anim, 100, s=text);

document.getElementById('nav_activator').onclick= ()=>{
    navbar.classList.toggle('active-navbar');
    document.getElementsByClassName('span')[0].classList.toggle('line-1')
    document.getElementsByClassName('span')[1].classList.toggle('line-2')
    document.getElementsByClassName('span')[2].classList.toggle('line-3')
}