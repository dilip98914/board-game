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
