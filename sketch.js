s = 0;
scl = 20;

function setup() {
  createCanvas(600, 600);  
  s = new snake(0,0,scl,'#ffa500');
  f = new food(scl,(255, 0, 0));
  frameRate(12);
  f.pick();
  s2 = new snake(width-scl,height-scl,scl,'#71eeb8')
}

function draw() {
  background(255);  
  s.update();
  s.show();
  s2.update();
  s2.show();
  f.place();
  
  if (s.eat(f.x,f.y)){
    f.pick();
    console.log('Food Registered');
  }
  if (s2.eat(f.x,f.y)){
    f.pick();
    console.log('Food Registered');
  }
  text('Score: ' + s.total, 10, 20);
  text('P2 Score: ' + s2.total,width-70,height-10);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
     s.dir(0,-1);
  }else if(keyCode === DOWN_ARROW) {
     s.dir(0,1);
  }else if(keyCode === LEFT_ARROW) {
     s.dir(-1,0);
  }else if(keyCode === RIGHT_ARROW) {
     s.dir(1,0);
  }
  
  if(keyCode === 87) {
     s2.dir(0,-1);
  }else if(keyCode === 83) {
     s2.dir(0,1);
  }else if(keyCode === 65) {
     s2.dir(-1,0);
  }else if(keyCode === 68) {
     s2.dir(1,0);
  }
}


