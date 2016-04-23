var capsu;
var capsu_caminar;
var capsu_parado;
var jugador_sprite;


function preload() {
  capsu = loadSpriteSheet('recursos/prite.png', 264, 264, 9);
  capsu_caminar = loadAnimation(capsu);
  capsu_parado = loadAnimation("recursos/prite_parado0001.png", "recursos/prite_parado0001.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  jugador_sprite = createSprite(400, 150, 250, 100);
  jugador_sprite.addAnimation('parado', capsu_parado);
  jugador_sprite.addAnimation('caminar', capsu_caminar);


}

function draw() {
  background(0);
  drawSprites();
}