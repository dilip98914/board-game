var Grid=require('./grid');

var canvas,context;
var grid;

window.onload = function() {
    canvas=document.getElementById("screen");
    context= canvas.getContext("2d");
    grid=new Grid(15,15);
    this.requestAnimationFrame(()=>{
        grid.draw(context);
    });
};



