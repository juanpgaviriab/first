let grados = 360; // grados de la circunferencia

let sinc1 = 0;
let sinc2 = 0;
let sinc3 = 0;

let cont = 6.2831855;

let numcirculo = 5;

let rex1 = 50; // radio externo del primer eje
let rin1 = 25; // radio interno del primer eje
let mov1 = 0; // movimiento eje 1

let rex2 = 75; // radio externo del segundo eje
let rin2 = 50; // radio interno del segundo eje
let mov2 = 0; //movimiento eje 2

let rex3 = 100; // radio externo del tercer eje
let rin3 = 75; // radio interno del tercer eje
let mov3 = 0; //movimiento eje 3

let rex4 = 125; // radio externo del cuarto eje
let rin4 = 100; // radio interno del cuarto eje
let mov4 = 0; //movimiento eje 4

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  let num = 20; // numero de puntos
let rad = radians(grados/num); // conversion a radianes

  //dibujo estructura
  stroke(255);
  noFill();
  let distanciacirculo = 50; // distancia incial del primer circulo
  for (let circulo = 0; circulo < numcirculo; circulo = circulo + 1) {
    ellipse(width/2, height/2, distanciacirculo, distanciacirculo);
    distanciacirculo = distanciacirculo + 50;
  }


  //eje 1
  stroke(255);
  noFill();
  line(cos(mov1)*rin1 + width/2, sin(mov1)*rin1 + height/2, cos(mov1)*rex1 + width/2, sin(mov1)*rex1 + height/2);

  //eje 2
  stroke(255);
  noFill();
  line(cos(mov2)*rin2 + width/2, sin(mov2)*rin2 + height/2, cos(mov2)*rex2 + width/2, sin(mov2)*rex2 + height/2);

  //eje 3
  stroke(255);
  noFill();
  line(cos(mov3)*rin3 + width/2, sin(mov3)*rin3 + height/2, cos(mov3)*rex3 + width/2, sin(mov3)*rex3 + height/2);

  //eje 4
  stroke(255);
  noFill();
  line(cos(mov4)*rin4 + width/2, sin(mov4)*rin4 + height/2, cos(mov4)*rex4 + width/2, sin(mov4)*rex4 + height/2);

  fill(255, 255, 0);
  ellipse(cos(mov4)*150 + width/2, sin(mov4)*150 + height/2, 10, 10);


  mov1 = mov1 + rad;


  if (mov1 > 6.2831855) {
    mov1 = 0;
    sinc1 = sinc1 + rad;
    if (sinc1 > 6.3) {
      sinc1 = 0;
    }
  }

  if (mov1 == sinc1) {
    mov2 = mov2 + rad;
  }

  if (mov2 > 6.2831855) {
    mov2 = 0;
    sinc2 = sinc2 + rad;
    if (sinc2 > 6.3) {
      sinc2 = 0;
    }
  }

  if ((mov2 == sinc2)&&(mov1 == sinc1)) {
    mov3 = mov3 + rad;
  }
  
  if (mov3 > 6.2831855) {
    mov3 = 0;
    sinc3 = sinc3 + rad;
    if (sinc3 > 6.3) {
      sinc3 = 0;
    }
  }

  if ((mov2 == sinc2)&&(mov1 == sinc1)&&(mov3 == sinc3)) {
    mov4 = mov4 + rad;
  }
  
}