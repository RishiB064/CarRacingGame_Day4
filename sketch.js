//create the variables for the car
var database;
var canvas,backgroungImg;
var gameState = 0;
var playerCount;
var form,player,game;
var distance = 0;
var allPlayers;
var cars,car1,car2,car3,car4;
var track,car1_img,car2_img,car3_img,car4_img;


function preload()
{

    track = loadImage("images/track.jpg");
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");

}

function setup()
{
    //use the firebase database
    database = firebase.database();
    canvas = createCanvas(displayWidth - 100 , displayHeight - 150);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw()
{
    background("white");
    if(playerCount === 4)
    {
        game.update(1);
    }
    if(gameState === 1)
    {
        game.play();
    }
  if(gameState === 2)
  {
      game.end();
  }  

}


