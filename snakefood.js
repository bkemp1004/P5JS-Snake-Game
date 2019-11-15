
function food(scl,col){
  cols = floor(width/scl);
  rows = floor(height/scl);
  this.pick = function() {
    this.x = floor(random(cols))*scl;
    this.y = floor(random(rows))*scl;
  }
  this.place = function() {
    fill(color(col));
    rect(this.x,this.y,scl,scl);
  }
}