var speechRec = new p5.SpeechRec('es-MX',gotSpeech);
let continuous = true;
let interim = false;

let int = 50;
let interlineado = 17;
let wy = 0;
let ty;
let myArray = [];
let regular;

function preload() {
  regular = loadFont('files/EBGaramond-Regular.ttf');
  let bolditalic = loadFont('files/EBGaramond-ExtraBoldItalic.ttf');
  let italic = loadFont('files/EBGaramond-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255,255,0);
  textFont(regular);
  textSize(14);
  textAlign(LEFT);

speechRec.start(continuous,interim);

}

function gotSpeech(){

  var p = speechRec.resultString;
  //text('-  ' + p, 50,int);
  //int = int - interlineado;
  append(myArray, p);
  print(myArray);
  //text('-  ' + p, int,int);
  background(255,255,0);
  let plusa = 0;
  for(let a = 0; a < myArray.length;a = a + 1){
   ty = int + (myArray.length*interlineado);
    text('-  ' + myArray[a], 50,ty - plusa);
    plusa = plusa + interlineado;
  }
}


function draw(){


}

function mouseWheel(){
  if(ty > windowHeight){
    wy = ty + 10;
      resizeCanvas(windowWidth,wy);
      background(255,255,0);
      let plus = 0;
      for(let a = 0; a < myArray.length;a = a + 1){
        ty = int + (myArray.length*interlineado);
        text('-  ' + myArray[a], 50,ty - plus);
        plus = plus + interlineado;
      }
    }

}
