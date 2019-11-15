function snake(xstart, ystart, scl, col){
  this.x = xstart;
  this.y = ystart;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.add = 1;
  this.tail = [];
  this.last = 0;
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.update = function(){
    this.death();
    
    if(this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    
    
    this.x = constrain(this.x,0,width - scl);
    this.y = constrain(this.y,0,height - scl);
  }
  
  this.eat = function (x, y){
    this.d = dist(this.x, this.y, x, y);
    if(this.d < 1) {
      this.total += this.add;
      return true;
    }else{
      return false;
    }
  }
  
    this.death = function(){
      for(var i = 0; i < this.tail.length;i++){
        var pos = this.tail[i];
        var d = dist(this.x,this.y,pos.x,pos.y);
        if (d < 1){
          this.total = 0;
          this.tail = [];
          background(255, 0, 0);
        }
      }
    }
  
  this.show = function(){
    fill(color(col));
    for (var i = 0; i < this.tail.length - 1; i++){
       rect(this.tail[i].x,this.tail[i].y, scl,scl); 
    }
    if (this.total >= 1){
      rect(this.last.x,this.last.y, scl, scl)
    }
    this.snake = rect(this.x,this.y, scl,scl);
    this.last = createVector(this.x,this.y);
  }
  console.log('Snake Registered');
}