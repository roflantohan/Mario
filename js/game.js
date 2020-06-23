'use strict'

let position = 0;
let x = 40;
let y = 155;
let differenceX = 0;
let differenceY = 0;
let t = -50;
let sign = false
let scroll = 0;
let level = 0;

const reset = () => {
	x = 40;
    position = 0;
    differenceX = 0;
    differenceY = 0;
    t = -50;
    y = 155;
    sign = false;
    scroll= 0;
    context.setTransform(1, 0, 0, 1, scroll, 0)
}


const game = () => {
    //gravity
	if (t != -50) {
        t++;
        differenceY -= t;
    }
    let hight = floor[Math.floor(x/16)*16]
    if ((y - differenceY >= floor[Math.floor(x/16)*16] - 29) && (y - differenceY <= floor[Math.floor(x/16)*16] - 22)) {
        t = -50;
        differenceY = 0;
        y = floor[Math.floor(x/16)*16] - 28;
    } else {
        if ((y - differenceY < floor[Math.floor(x/16)*16] - 29) && (t === -50)) {
            t = 1;
        }
        if ((y - differenceY > floor[Math.floor(x/16)*16] - 19) && (t === -50)) {
            t = 1;
        }
    }
    //move mario
    if (Math.abs(differenceX) === 5) {
        x += differenceX;
        if (position === 1) {
            position = 0;
            sign = differenceX === 5 ? false : true;
            mario = sign ? mario_10 : mario_0;
        } else {
            position = 1;
            mario = sign ? mario_11 : mario_1;
        }
    }
    //move camera
    if(x > 300 && differenceX > 0){
        scroll += differenceX;
        context.setTransform(1, 0, 0, 1, -scroll, 0)
    }

    draw_lvl(level, x, y - differenceY, mario)

	document.getElementById("level").innerHTML = "Level " + (level + 1);
    //end or continue game
    if (x >= 3100) {
    	ending.play();
        alert('Great! You have passed this level!');
       	stop(ending);
       	if(Number(level) == Number(tiles.length-1)){
       		level = 0;
	    }else{
       		level++;
       		new_stage.play();
	    }
		reset();
	    setTimeout("game()", 50);
    } else {
        if (((t === -50) && (trap[Math.floor(x/16)*16] != 0)) ||(y - differenceY > 216) || (x - differenceX < scroll - 100)) {
        	game_over.play();
            alert('You lost...');
           	stop(game_over)
            level = 0;
            reset();
        }
        setTimeout("game()", 50);
    }

}	


background.onload = game;
