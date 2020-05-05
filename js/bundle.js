(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports=function(i,j,size,color){
    this.i=i;this.j=j;
    this.size=size;
    this.color=color;
    this.x=this.i*this.size;
    this.y=this.j*this.size;
    console.log(this.color);

    this.update=function(){

    }

    this.draw=function(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.size-1,this.size-1);               
    }
}
},{}],2:[function(require,module,exports){
module.exports={
    screeWidth:500,
    screenHeight:500,
}
},{}],3:[function(require,module,exports){
var constants=require('./constants');
var Box=require('./box');

module.exports=function(cols,rows){
    this.cols=cols;
    this.rows=rows;
    this.size=500/cols;
    this.boxes=new Array(this.cols);
    for(var i=0;i<this.cols;i++){
        this.boxes[i]=new Array(this.rows);
    }
    this.color="white";
    for(var i=0;i<this.cols;i++){
        for(var j=0;j<this.rows;j++){
            this.boxes[i][j]=new Box(i,j,this.size,this.color)
        }
    }
    console.log(this.boxes);
    

    this.clearScreen=function(ctx){
        ctx.fillStyle="black";
        ctx.fillRect(0,0,constants.screenWidth,constants.screenHeight);
    }

    this.draw=function(ctx){
        this.clearScreen(ctx);

        for(var i=0;i<this.cols;i++){
            for(var j=0;j<this.rows;j++){
                this.boxes[i][j].draw(ctx);
            }
        }
    }
}

},{"./box":1,"./constants":2}],4:[function(require,module,exports){
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



},{"./grid":3}]},{},[4]);
