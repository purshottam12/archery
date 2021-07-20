const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   
  compBase=new ComputerBase(1400,550,250,250)
  playerbase=new PlayerBase(400,550,250,250)
  comp=new Computer(400,375,100,150)
  player=new Player(1400,375,100,150)
  playerArrow1=new playerArrow(400,375,100,150)
  computerArrow=new ComputerArrow(1400,375,100,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //Display Playerbase and computer base 
   compBase.display()
   playerbase.display()
  comp.display()
  player.display()
  playerArrow.display()
  computerArrow.display()
   //display Player and computerplayer


}
