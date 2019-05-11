var yo, xo;
var x = 225;
var xd;
var yd = 350;
var disparou = false;
function setup() {
   createCanvas(450, 400);
   yo = random(400); 
   xo = -random(400);
}

function draw() {
   background(0);
  
   yo = yo + 3;
  
   if(yo > width) {
     yo = -random(400);
     xo = random(400);
     
   }
  
   rect(xo,yo,30,30);
  if (keyIsDown(LEFT_ARROW))
    x = x - 3;
    if (keyIsDown(RIGHT_ARROW))
      x = x + 3  ; 
      ellipse(x, 350, 50, 30);
  if (keyIsDown(32) && disparou == false)
  {   
     
    disparou = true;
    yd = 350; 
    xd = x; 
    
  }
  if(disparou) {
    
    ellipse(xd, yd, 10, 10)
     yd = yd - 12
    if(yd < 0){
       disparou = false;  
    }   
  } 
