var mouse_movimiento = false;
var touch_started = false;
var fondo;
var capsu;
var capsu_caminar;
var capsu_parado;
var jugador_sprite;
var piso_sprite;
var piso_elevado_sprite;
var GRAVITY;
var tile_sprite_sheet;
var tile_frames = [
	{"name":"piso", "frame":{"x":24.08, "y": 0, "width": 24.08, "height": 25.31}},
	{"name":"piso_elevado", "frame":{"x":24.08, "y": 25.31, "width": 24.8, "height": 25.31}},
	];


function preload() {
  capsu = loadSpriteSheet('recursos/prite.png',264,264,9);
  capsu_caminar= loadAnimation(capsu);
  capsu_parado= loadAnimation(new SpriteSheet("recursos/prite-cap-01_01.png","recursos/prite-cap-01_08.png"));
}
 
  

function setup() {
  createCanvas(windowWidth, windowHeight);
	fondo = loadImage("recursos/fondo.jpg");
	jugador_sprite = createSprite(400, 150, 250, 100);
	jugador_sprite.addAnimation('caminar', capsu_caminar);
  jugador_sprite.addAnimation('parado', capsu_parado);
  
   piso_sprite = createSprite(0.5*width, height*0.97, width, height*0.065);
  piso_sprite.shapeColor =  color(255, 0, 0, 0);
  
  piso_elevado_sprite = createSprite(width*0.9, height*0.65, width*0.4, 50);
  piso_elevado_sprite.shapeColor =  color(255, 0, 0, 0);
  
  
 
  
}

function draw() {
  background(fondo);
   
 
    
  
  var eventX;
  if (isTouch()) {
    eventX = mouseX;
  } else {
    eventX = mouseX;
  }

  if(eventX < jugador_sprite.position.x - 10) {
    jugador_sprite.changeAnimation('caminar');
    jugador_sprite.mirrorX(1);
    jugador_sprite.velocity.x = - 2;
  }
  else if(eventX > jugador_sprite.position.x + 10) {
    jugador_sprite.changeAnimation('caminar');
    jugador_sprite.mirrorX(-1);
    jugador_sprite.velocity.x = 2;
  }
  else {
    jugador_sprite.changeAnimation('parado');
    jugador_sprite.velocity.x = 0;
  }

  drawSprites();
}

function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_movimiento = true;
}

function isTouch() {
  return touch_started && !mouse_movimiento;
}

function mouseClicked() {
	jugador_sprite.velocity.y = -10;
}


  

  
  