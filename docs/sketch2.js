var speechRec = new p5.SpeechRec('es-MX',gotSpeech);
let continuous = true;
let interim = false;

let int = 50;
let interlineado = 33;
let wy = 0;
let ty;
let myArray = [];
let timeDate = [];
let regular;
let tex;
let num1;

function preload() {
  regular = loadFont('files/EBGaramond-Regular.ttf');
  let bolditalic = loadFont('files/EBGaramond-ExtraBoldItalic.ttf');
  let italic = loadFont('files/EBGaramond-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255,255,0);
  textFont(regular);
  textSize(30);
  textAlign(LEFT);

speechRec.start(continuous,interim);

infopage();


}

function infopage(){
  textSize(12);
  text('ESTA ES UNA PÁGINA DE PRUEBA', 10,20);
}

function texto(){
  background(255,255,0);
  infopage();

  let rev = myArray.reverse();
  print(myArray);
  print(rev);
  tex = createP(join(rev,"<br/><br/>"));
  tex.html('- ' + join(rev,"<br/><br/>"));
  tex.style('font-size', '70px');
  tex.style('background', '#FFFF00');
  tex.size(windowWidth/2);
  tex.position(50,50);
  rev = myArray.reverse();
  num1 = tex.elt.offsetHeight;
  let num2 = tex.elt.height;
}

function gotSpeech(){

  var p = speechRec.resultString;

  append(myArray, p);

texto();

}


function draw(){


}

function mouseWheel(){

  //if(ty > windowHeight){
      wy = num1 + 500;
      resizeCanvas(windowWidth,wy);

texto();

    }
//}

function windowResized() {

  wy = num1 + 500;
  resizeCanvas(windowWidth,wy);

texto();


  if(ty > windowHeight){
    wy = num1 + 500;
      resizeCanvas(windowWidth,wy);

texto(); 

    }
}
