/* global createCanvas, frameRate, text, UP_ARROW, textSize, keyIsPressed, background, random, noStroke, stroke, strokeWeight, keyCode, ellipse, fill, line, rect */

var gameOn, lives, score, yPos_red;
var line1_x, line1_y, line1_length;
var line2_x, line2_y, line2_length;
var decreaseLength_line1, decreaseLength_line2;

function setup() {
  createCanvas(400, 400);
  frameRate(75);
  background(250, 223, 150);
  gameOn = true;
  lives = 3;
  score = 0;
  yPos_red = 200;
  
  line1_x = 440;
  line1_y = random(100, 350);
  //line1_y = 360;
  
  line1_length = random(20, 320);
  
  line2_x = 640;
  line2_y = random(100, 350);
  //line2_y = 360;
  line2_length = random(20, 320);
  
  decreaseLength_line1 = decreaseLength_line2 = 1;
   
}

function draw() {
  if (gameOn == true) {
    background(250, 223, 150);
    noStroke();
    fill(225, 186, 0);

    if (lives == 3) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
      ellipse(30, 110, 30);
    } 
    
    else if (lives == 2) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
    } 
    
    else if (lives == 1) {
      ellipse(30, 30, 30);
      
    } 
    
    else {
      gameOn == false;
    }
    rect(180, 15, 200, 60, 60) ;
    fill(0);
    textSize(32);
    text("Score: " + score, 220, 55);

    fill(255, 0, 0);
    ellipse(100, yPos_red, 30, 30);
    
    if(keyIsPressed && keyCode == UP_ARROW){
      yPos_red -= 10;
    }
    else{
      yPos_red += 10;
    }
    if(yPos_red >= 385){
      yPos_red = 385;
    }
    if (yPos_red <= 15){
      yPos_red = 15;
    }
   
    stroke(0);
    strokeWeight(4);
    
    line(line1_x, line1_y, line1_x + line1_length, line1_y);
    line(line2_x, line2_y, line2_x + line2_length, line2_y);
    
    line1_x = line1_x - decreaseLength_line1;
    line2_x = line2_x - decreaseLength_line2;
    
    if(line1_x < 0-line1_length){
      line1_x = 400;
      line1_y = random(50, 350);
      line1_length = random(20, 320);
      decreaseLength_line1 += 0.5;
      lives--;
    }
    
    if(line2_x < 0-line2_length){
      line2_x = 400;
      line2_y = random(50, 350);
      line2_length = random(20, 320);
      decreaseLength_line2 += 0.5;
      lives--;
    }
    
    
    if(line1_y < yPos_red + 15 && line1_y > yPos_red - 15){
      
      if(line1_x < 115 && line1_x + line1_length > 85){
        line1_x = 400;
        score++;
        line1_y = random(100, 350);
        line1_length = random(20, 320);
        decreaseLength_line1 += 0.5;
      }
    }
    
    if(line2_y < yPos_red + 15 && line2_y > yPos_red - 15){
      
      if(line2_x < 115 && line2_x + line2_length > 85){
        line2_x = 400;
        score++;
        line2_y = random(100, 350);
        //line2_y = 360;
        line2_length = random(20, 320);
        decreaseLength_line2 += 0.5;
      }
    }
      
      }//end of gameOn
  
  else{ //if gameOn is not true
    background(250, 223, 150);
    noStroke();
    fill()
  }
  
  
} //endof draw function
   
  
 
