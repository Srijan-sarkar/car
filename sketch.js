var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var c1,c2,c3,c4,cs;

var database;

var form, player, game;

var distance =0;
var allPlayers;


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
