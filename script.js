document.querySelector('.btn').addEventListener('click',op);
var newbio = document.querySelector('.bio').innerHTML;
function op(){
 window.newbio = prompt('Enter your Bio');
 document.querySelector('.bio').innerHTML= newbio;
};

document.querySelector('#i2').addEventListener('click',changeNav);
function changeNav(){
    document.querySelector('.posts').style.display = 'none';
    document.querySelector('#i2').style.borderBottom = '1px solid black';
    document.querySelector('#i1').style.borderBottom = '0 solid black';

};
document.querySelector('#i1').addEventListener('click',changenav);
function changenav(){
    document.querySelector('.posts').style.display = 'block'
    document.querySelector('#i2').style.borderBottom = '0 solid black';
    document.querySelector('#i1').style.borderBottom = '1px solid black';
};
let myposts = document.querySelectorAll('.posts img');



document.querySelector('.posts .a').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .b').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .c').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .d').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .e').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .f').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .g').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .h').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .i').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .j').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .k').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('.posts .l').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});
document.querySelector('#storyfav').addEventListener('click',(fullscreen)=>{
    fullscreen.target.requestFullscreen()
});




let like= document.querySelector('.footer img').previousElementSibling;

 like.addEventListener('dblclick',(like)=>{
    like.target.style.color = 'red'
});

let story = document.querySelector('#file');
story.addEventListener('click',addstory);
 function addstory(){
    let s2 = document.querySelector('.s2');
    let storyadding = s2.cloneNode(true);

    document.querySelector('.highlight').appendChild(storyadding);
 
    storyadding.addEventListener('contextmenu',function (e){
    e.preventDefault();
    storyadding.remove();
})

};

/*
let highlight = document.querySelector('.highlight');
highlight.forEach(function(element){
    element.addEventListener('contextmenu',function(e){
        e.preventDefault();
        element.remove();
    })
    
}); */










