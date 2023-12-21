import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { Pong } from "./pong.js";

const pong = new Pong();

window.addEventListener("keydown", function(event){
    switch(event.keyCode){
        case 38:
            pong.paddle2.y -= pong.paddle2.dy;
            break;
        case 40:
            pong.paddle2.y += pong.paddle2.dy;
            break;
        case 87:
            pong.paddle.y -= pong.paddle.dy;
            break;
        case 83:
            pong.paddle.y += pong.paddle.dy;
            break;
    }
});
