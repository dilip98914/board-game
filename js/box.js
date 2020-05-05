
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