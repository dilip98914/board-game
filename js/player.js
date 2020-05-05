function Player(i,j,size,color){
    this.i=i;this.j=j;
    this.size=size;
    this.color=color;
    this.x=this.i*this.size;
    this.y=this.j*this.size;

    this.update=function(){

    }

    this.draw=function(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.size-1,this.size-1);               
    }

}
module.exports={Player}