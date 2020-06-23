'use strict'

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const sky = new Image();
const ground = new Image();
const enemy = new Image();
const mushroom = new Image();
const coin = new Image();
const brick = new Image();
const background = new Image();
const flower_1 = new Image();
const flower_2 = new Image();
const bro = new Image();

const mario_1 = new Image();
const mario_0 = new Image();
const mario_11 = new Image();
const mario_10 = new Image();

let trap = [];
let floor = [];

flower_1.src = "./img/flower_1.png";
flower_2.src = "./img/flower_2.png";

let flower = flower_1;

mario_1.src = "./img/mario_1.png"; //right stand
mario_0.src = "./img/mario_2.png"; //right move
mario_11.src = "./img/mario_3.png"; //left stand
mario_10.src = "./img/mario_4.png"; //left move

let mario = mario_1;

bro.src = "./img/bro.png";
brick.src = "./img/brick.png";
sky.src = "./img/sky.png";
ground.src = "./img/ground.png";
background.src = "./img/background.png";

const draw_lvl = (lvl, _x_mario, _y_mario, mario) => {

	if(flower != flower_1){
		flower = flower_1;
	}else{
		flower = flower_2;
	}

	context.drawImage(background, 0, 0);
    

	for(let i = 0; i <= background.width; i++){
			floor[i] = tiles[lvl].position_y_2;
			trap[i] = 0;
		if(i%16 == 0){ 
			context.drawImage(ground, i, tiles[lvl].position_y_1);
			context.drawImage(ground, i,  tiles[lvl].position_y_2);
			
			tiles[lvl].position_x.map((elem, k) => {
				if((i <= elem && i+16 > elem)){
					context.drawImage(sky, i, tiles[lvl].position_y_1);
					context.drawImage(sky, i, tiles[lvl].position_y_2);
					context.drawImage(brick, i, tiles[lvl].position_y[k]);
					floor[i] =  tiles[lvl].position_y[k];
				}
			})
			tiles[lvl].flower_pos_x.map((elem, k) => {
				if((i <= elem && i+16 > elem)){
					context.drawImage(flower, i, tiles[lvl].flower_pos_y[k] - tiles[lvl].delta_flower)
					trap[i] = tiles[lvl].flower_pos_y[k] - tiles[lvl].delta_flower
				}
			})
		}
		context.drawImage(mario, _x_mario, _y_mario);
		context.drawImage(bro, 3100, 162);

	}

}
