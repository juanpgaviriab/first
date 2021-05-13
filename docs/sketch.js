var speechRec = new p5.SpeechRec('es-CO',gotSpeech);
let continuous = true;
let interim = false;

let int = 50;
let interlineado = 33;
let wy = 0;
let ty;
let myArray = [];
let timeDate = [];
let regular;
let bold;
let tex;
let num1;

function preload() {
  regular = loadFont('files/B612Mono-Regular.ttf');
  //bold = loadFont('files/B612Mono-Bold.ttf');
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
  background(255,255,0);
  textSize(12);
  noStroke();
  text('Háblame: ', 10,20);
  stroke(0);
  line(10,100,200,100);
}

function texto(){

  infopage();

  let rev = myArray.reverse();
  tex = createP('> ' + join(rev,"<br/><br/>"));
  tex.html('> ' + join(rev,"<br/><br/>"));
  tex.style('background', 'rgb(255, 255, 0)');
  tex.style('font-family','monospace');
  tex.style('font-size', '15px');
  tex.size(windowWidth/2);
  tex.position(250,100);
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

  if(num1 > windowHeight){
      wy = num1 + 500;
  }else {
    wy = windowHeight
  }
      resizeCanvas(windowWidth,wy);

texto();

    }
//}

function windowResized() {

if(num1 > windowHeight){
    wy = num1 + 500;
}else {
  wy = windowHeight
}

  resizeCanvas(windowWidth,wy);

texto();


  if(ty > windowHeight){
    wy = num1 + 500;
      resizeCanvas(windowWidth,wy);

texto();

    }
}
