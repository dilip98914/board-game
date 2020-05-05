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


