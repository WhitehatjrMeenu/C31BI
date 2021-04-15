const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;





var gameState = "onSling";

// Datatypes

// String Datatype 

var name = " Whitehat";

var name1= " Meenu"

console.log(name1)

// Integer Datatype

var score= 45;

console.log(score)

// Boolean Dataype 

var pass = true;
console.log(pass)

// Null datatype 

var number = null;
console.log(number)
// Undefined Datatype

var object ;

console.log(object);

//Datatype Array 

var a=[name,name1,score,object,pass,score,name]

//console.log(a);

//console.log(a[5]);
//console.log(a[0]);

var n= [22,33,44,55,66,77,88];

var d=[[11,22,33],[66,77],[0,0,0],[true,null],"Meenu", "whitehat"]

console.log(d.length)

console.log(d[3][1])



/*position= [this.body.position.x,this.body.position.y]

trajectory=[];

trajectory.push(position)

trajectory.length*/

for ( var i=0 ; i<d.length; i++)
{
    console.log(d[i][0])
}












/*//string Datatype 
var name= "Sujal";
console.log(name);

// Integer datatype 
var age = 13;
console.log(age);

// boolean values

var ans = true;
console.log(ans);

// NULL

var object1= null;
console.log(object1);

//  Undefined

var object2 ;

console.log(object2);*/



//this.trajectory.push(postion)


/*

 var arr = ["Nitin","Meenu","Whitehat",45,12,15,null,true]


  var arr1 = [["Nitin","Meenu"],[32,1],[2,4,5,9,6,7,8]]
 

 console.log("Array :"+arr1.length);

 console.log(arr1[2][3]);

*/




function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();   
    
   // x=random(0,400);
   // y=randomw(0,400);
    // drop = new Drop(x,y)
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}