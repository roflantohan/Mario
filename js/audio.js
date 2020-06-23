'use strict'

const ending = new Audio();
const game_over = new Audio();
const new_stage = new Audio();
const jump = new Audio();

ending.src = "./audio/ending.mp3";
game_over.src = "./audio/gameover.wav";
new_stage.src = "./audio/stage_clear.wav";
jump.src = "./audio/jump.mp3";

const stop = (audio) =>{
	audio.pause();
	audio.currentTime = 0.0;
}

