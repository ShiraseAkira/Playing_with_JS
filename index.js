"use strict";

//constants
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const COLOR_SKY = '#4973d7';
const COLOR_GROUND = '#65a851';
const COLOR_SUN = '#fde698';
const COLOR_WINDOW = '#fdda67';
const COLOR_COLUD = '#cee0f3';
const COLOR_HOUSE = '#bc9101';
const COLOR_ROOF = '#cb0800';
const COLOR_PIPE = '#666666';
const COLOR_OUTLINE = '#787151';
const COLOR_PIPE_OUTLINE = '#575f74';

let canvas = document.getElementById('canvas');
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
let canvasContext = canvas.getContext('2d');

canvasContext.strokeStyle = COLOR_OUTLINE;

//Sky
canvasContext.fillStyle = COLOR_SKY;
canvasContext.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
//GROUND
canvasContext.fillStyle = COLOR_GROUND;
canvasContext.fillRect(0 , CANVAS_HEIGHT*0.75, CANVAS_WIDTH, CANVAS_HEIGHT - CANVAS_HEIGHT*0.75);
//HORIZON
canvasContext.lineWidth = 2;
canvasContext.beginPath();
canvasContext.moveTo(0 , CANVAS_HEIGHT*0.75);
canvasContext.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT*0.75);
canvasContext.stroke();
canvasContext.closePath();
//SUN
canvasContext.fillStyle = COLOR_SUN;
canvasContext.beginPath();
canvasContext.arc(25, 25, 50, 0, Math.PI*2, false);
canvasContext.fill();
canvasContext.closePath();
//HOUSE
canvasContext.fillStyle = COLOR_HOUSE;
canvasContext.fillRect(375 , 340, 250, 250);
canvasContext.strokeRect(375 , 340, 250, 250);
//PIPE
canvasContext.fillStyle = COLOR_PIPE;
canvasContext.strokeStyle = COLOR_PIPE_OUTLINE;
canvasContext.fillRect(545, 200, 30, 80);
canvasContext.strokeRect(545, 200, 30, 80);
//ROOF
canvasContext.fillStyle = COLOR_ROOF;
canvasContext.beginPath();
canvasContext.moveTo(375, 340);
canvasContext.lineTo(500, 180);
canvasContext.lineTo(625, 340);
canvasContext.lineTo(375, 340);
canvasContext.fill();
canvasContext.closePath();
//WINDOW
canvasContext.fillStyle = COLOR_WINDOW;
canvasContext.fillRect(450, 380, 100, 120);
canvasContext.lineWidth = 1;
canvasContext.strokeRect(450, 380, 100, 120);
canvasContext.beginPath();
canvasContext.moveTo(450, 440);
canvasContext.lineTo(550, 440);
canvasContext.moveTo(500, 380);
canvasContext.lineTo(500, 500);
canvasContext.stroke();
canvasContext.closePath();
//CLOUDS
canvasContext.fillStyle = COLOR_COLUD;

/*
 * x, y - bottom left corner of described rectangle
 */
let drawCloud = (x, y) => {
  let ellipse_width = 60;
  let ellipse_height = 25;
  canvasContext.beginPath();
  canvasContext.ellipse(x + ellipse_width, y - ellipse_height, ellipse_width, ellipse_height, 0, 0 , Math.PI*2);
  canvasContext.ellipse(x + ellipse_width*2.4, y - ellipse_height, ellipse_width, ellipse_height, 0, 0 , Math.PI*2);
  canvasContext.fill(); // strange behavior without this fill
  canvasContext.ellipse(x + ellipse_width*1.7,
                        y - ellipse_height*1.7, ellipse_width, ellipse_height, 0, 0 , Math.PI*2);
  canvasContext.fill();
  canvasContext.closePath();
};
drawCloud(100, 175);
drawCloud(400, 110);
drawCloud(730, 155);

