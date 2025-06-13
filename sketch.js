function setup() {

  createCanvas(800, 600);

}

function draw() {

  background(220);

  

  // Linha no meio

  stroke(0);

  line(width/2, 0, width/2, height);

  // Lado esquerdo - Tema rural

  // Casa
   text("🥵");
  fill("#4c9dea");
  rect(0,0,400,550);
  fill(150, 75, 0);//Cor da casa
  rect(100, 400, 100, 80);
  fill(255, 0, 0);//Cor do teto
  triangle(100, 400, 150, 350, 200, 400);
  fill("green")
  rect(330, 545,70,800);
  fill("green");
  ellipse(150, 550, 500, 140);

  // Janela

  fill(255);
  rect(130, 430, 20, 20);

  // Árvore

  fill(139, 69, 19);
  rect(80, 470, 10, 30);
  fill(0, 128, 0);
  ellipse(85, 440, 50, 70);
  
  // Lado direito - Tema cidade

  // Prédio simples

  fill("grey");
  rect(600, 350, 80, 150);
  fill("rgb(185,185,14)");
  rect(650, 360, 20, 30);
  rect(620, 420, 20, 30);
  fill("rgb(85,81,81)")
  rect(400,500,630,500)

  // Carro

  fill(0, 0, 255);
  rect(715, 485, 50, 29);
  fill(0)
  ellipse(725, 520, 10, 10);
  ellipse(755, 520, 10, 10);
}