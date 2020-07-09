var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  drawSprites();
}