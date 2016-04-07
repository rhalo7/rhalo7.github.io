var capsula;
var explode_animation;
var hombre;
var titulo;
var font;
function preload(){
  capsula = loadSpriteSheet('assets/spritesheet.png',72,120,3);
  hombre = loadAnimation('assets/homi1.png','assets/homi10.png')
  explode_animation = loadAnimation(capsula);
  titulo = loadImage('assets/kill_vi.png')
  font = loadFont('assets/acmesa.TTF');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
 background(60,112,112);
 noStroke();
 fill(44,159,115);
 rect(width*0.5,height*0.5,150,60,4,4,4,4);
 rect(width*0.65,height*0.5,60,60,4,4,4,4);
 fill(255);
 rect(0,height*0.83,width,20);
 textSize(55);
 textFont(font);
 text("play",width*0.51,height*0.58)
 text("?",width*0.66,height*0.58)
 animation(hombre, 150, height*0.55);  
 image(titulo,width*0.20,0,960,292)  
 animation(explode_animation, width*0.35,height*0.75);
}