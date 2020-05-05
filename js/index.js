var Grid=require('./grid');

var canvas,context,screenWidth,screenHeight;
var grid;

window.onload = function() {
    canvas=document.getElementById("screen");
    context= canvas.getContext("2d");
    screenWidth=canvas.width;screenHeight=canvas.height;
    context.fillRect(0,0,screenWidth,screenHeight);
    grid=new Grid(10,10);
    this.requestAnimationFrame(()=>{
        grid.draw(context);
    });
    context.fillStyle="red";
    context.fillRect(0,10,10,100);
};


