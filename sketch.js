const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

//Variables para los cuerpos 
var bottom_ground;//Suelo inferior 
var top_ground; //Suelo superior 
var left_ground; //Suelo izquierdo 
var rigth_ground; //Suelo derecho
var ball
var right_button
var up_button

function setup() {
  createCanvas(400,400);

  //Motor físico 
  engine = Engine.create();

  //Se crea el nuevo mundo 
  world = engine.world;
  
  //Guardar clase (molde) en las variables y asignar propiedades 
  bottom_ground = new Ground(200,390,400,20);
  top_ground = new Ground(200,10,400,20);
  left_ground = new Ground(10,200,20,400);
  rigth_ground = new Ground(390,200,20,400);
 
var ball_options={
  restitution:1.0
}
ball=Bodies.circle(200,350,25,ball_options);
World.add(world,ball);

right_button=createImg("right.png");
right_button.position(220,30);
right_button.size(50,50);
right_button.mouseClicked(H_force);

up_button=createImg("up.png");
up_button.position(20,30);
up_button.size(50,50);
//up_button.mouseClicked(V_force);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  
  //Se actualiza motor físico
  Engine.update(engine);
  
  //Mostrar cuerpos con función show 
  bottom_ground.show();
  top_ground.show();
  left_ground.show();
  rigth_ground.show();

  ellipse(ball.position.x,ball.position.y,25);
  if(keyPressed("UP_ARROW")||up_button.mouseClicked){
V_force();
  }
}

function H_force (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function V_force (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}