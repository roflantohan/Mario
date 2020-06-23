'use strict'

document.onkeydown = (keyStroke) => {

    const isNetscape = (document.getElementById && !document.all);
    
    const touche = (isNetscape) ? keyStroke.which : event.keyCode;
    if ((touche === 65)) {
        differenceX = -5;
    }
    if ((touche === 68)) {
        differenceX = 5;
    }
    if ((touche === 87) && (t === -50)) {
        jump.play();
        t = -12;
    }
};
document.onkeyup = (keyStroke) => {
    
    const isNetscape = (document.getElementById && !document.all);
   
    const touche = (isNetscape) ? keyStroke.which : event.keyCode;
    if ((touche === 65)) {
        differenceX = 0;
    }
    if ((touche === 68)) {
        differenceX = 0;
    }
};

