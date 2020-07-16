var fixedRect, movingRect,ap,pa;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
pa = createSprite(300,300,20,15);
ap = createSprite(1000,300,20,21);  

ap.velocityX = -2;
pa.velocityX = 3;


pa.shapeColor = "white";
ap.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);  

 bounceOff(pa,ap);


  drawSprites();


}

function bounceOff(ab,cb){

 if (ab.x - cb.x < cb.width/2 + ab.width/2
    && cb.x - ab.x < cb.width/2 + ab.width/2) {
  ab.velocityX = ab.velocityX * (-1);
  cb.velocityX = cb.velocityX * (-1);
}
 if (ab.y - cb.y < cb.height/2 + ab.height/2
  && cb.y - ab.y < cb.height/2 + ab.height/2){
  ab.velocityY = ab.velocityY * (-1);
  cb.velocityY = cb.velocityY * (-1);
}

}