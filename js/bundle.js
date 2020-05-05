(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports=function(i,j,size,color){
    this.i=i;this.j=j;
    this.size=size;
    this.color=color;
    this.x=this.i*this.size;
    this.y=this.j*this.size;
    this.active=false;

    this.update=function(){

    }

    this.draw=function(ctx,color){
        if(color){
            ctx.fillStyle=color;
        }else{
            ctx.fillStyle=this.color;
        }
        ctx.fillRect(this.x,this.y,this.size-1,this.size-1);               
    }
}
},{}],2:[function(require,module,exports){
module.exports={
    width:500,
    height:500,
}

},{}],3:[function(require,module,exports){
var constants=require('./constants');
var Box=require('./box');
var Player=require('./player');


module.exports=function(cols,rows){

    this.create2dArray=function(cols,rows){
        return Array(rows).fill().map(() => Array(cols).fill(0));
    }

    this.createGrid=function(){
        let boxes= Array(rows).fill().map(() => Array(cols).fill(0));

        boxes=boxes.map((row,yy)=>{
            return row.map((elt,xx)=>{
                return new Box(xx,yy,this.size,"white");
            });
        });
        console.log(boxes);

        return boxes;
    }
    
    this.cols=cols;this.rows=rows;
    this.size=constants.width/cols;
    this.player=new Player(5,6,6,"yellow",this.size);
    this.boxes=this.createGrid();

    this.path=[
        // // +-15,
        // // 15-
        // [6,14],[6,],[],[],[],[]
        // [4,7],[4,6],[4,5],[4,4],
        // [3,4],[2,4],[1,4],[0,4],
        // [0,3],[0,2],[0,1],[0,6],
        // [1,1],[2,1],[3,1],[4,1]
    ]

    this.genArray=function(x1,y1,x2,y2){
        if(y2 && y2!==y1){
            for(let i=y1;i<y2;i++){
                this.path.push([x1,i]);                
            }   
        }else if(x2 && x2!==x1){
            for(let i=x1;i<x2;i++){
                this.path.push([i,y1]);                
            }   
        }
    }


    this.genArray(6,14,6,8);
    this.genArray(6,8,0,8);
    this.genArray(0,8,0,5);
    this.genArray(0,5,6,5);
    this.genArray(6,5,6,0);
    this.genArray(6,0,9,0);
    this.genArray(9,0,9,6);
    this.genArray(9,6,14,6);
    this.genArray(14,9,8,9);
    this.genArray(8,9,8,14);
    this.genArray(8,14,5,14);

    this.checkActive=function(xx,yy){
        if(this.player.i==yy && this.player.j==xx){
            this.boxes[xx][yy].active=true;
            console.log(true,this.boxes[xx][yy]);
        }
        this.path.forEach(pts=>{
            if(pts[0]==yy && pts[1]==xx){
                this.boxes[xx][yy].active=true;
            }
        });
    }

    this.clearScreen=function(ctx){
        ctx.fillStyle="black";
        ctx.fillRect(0,0,constants.width,constants.height);
    }

    this.draw=function(ctx){
        this.clearScreen(ctx);
            for(var j=0;j<this.rows;j++){
                for(var i=0;i<this.cols;i++){
                    this.checkActive(j,i);

                    if(this.boxes[j][i].active){
                        this.boxes[j][i].draw(ctx,"blue");
                    }else{
                        this.boxes[j][i].draw(ctx,null);
                    }
                    // ctx.fillStyle="green";
                    // ctx.fillText(i+","+j,i*this.size+this.size/2,j*this.size+this.size/2);
                    this.player.draw(ctx);
            }
        }
    }
}

},{"./box":1,"./constants":2,"./player":5}],4:[function(require,module,exports){
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




},{"./grid":3}],5:[function(require,module,exports){
module.exports=function(i,j,size,color,offset){
    this.i=i;this.j=j;
    this.size=size;
    this.color=color;
    this.offset=offset;
    document.addEventListener('keyup',(e)=>{
        e.preventDefault();
        console.log(e);
    });
    document.addEventListener('keydown',(e)=>{
        e.preventDefault();
        console.log(e);
        if(e.key==='ArrowUp'){
            console.log("sfbi");
            this.j-=1;
        }
    });

    this.update=function(){
        
    }

    this.draw=function(ctx){
        console.log(this.j);
        
        x=this.i*this.offset;
        y=this.j*this.offset;
        ctx.fillStyle=this.color;
        ctx.fillRect(x,y,this.size,this.size);               
    }

}



},{}]},{},[4]);
