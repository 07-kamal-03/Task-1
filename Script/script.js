// const data = document.getElementById("menu");
// const button = document.getElementById("hambar-line");
// var visible=false;
// function myfunction(){
//     const dropdown=document.getElementById("dropdown");
//     if(visible==false)
//     {
//         dropdown.setAttribute('style','display:block');
//         visible=true;
//     }
//     else
//     {
//         dropdown.setAttribute('style','display:none');
//         visible=false;
//     }
        
  
// }
// window.onclick=function(event){
//     if(!event.target.matches('hambar-line'))
//     {
//         var dropdown=document.getElementById('menu');
//         if(dropdown.classList.contains('showmenu'))
//             {
//                 dropdown.classList.remove('showmenu');
//             }
//     }
// }
const bar=document.querySelector(".hambar-line");
const menulist=document.querySelector(".menu");
bar.addEventListener("click",()=>{
    bar.classList.toggle("active");
    menulist.classList.toggle("active");
})
document.querySelectorAll(".select-item").forEach(n=>n.addEventListener("click",()=>{
    bar.classList.remove("active");
    menulist.classList.remove("active");
}))
