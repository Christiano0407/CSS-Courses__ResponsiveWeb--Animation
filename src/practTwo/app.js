console.log("Hello World!"); 

window.onresize = screen; 
window.onload = screen; 

function screen() {

    let myWidth = window.innerWidth;
    
    document.getElementById("size").innerHTML = "Width : " + myWidth + "px"; 
}
