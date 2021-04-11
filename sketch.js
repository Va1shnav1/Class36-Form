var form, game, player;
var database;
var player, form, game;
var GS = 0;
var pCount = 0;
function setup(){
    createCanvas(600, 400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    //background(255);
}