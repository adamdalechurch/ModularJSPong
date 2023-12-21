import {Ball} from "./ball.js";
import {Paddle} from "./paddle.js";

export function Pong(){
    this.canvas = document.getElementById("gameCanvas");
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, 10, 10, 5, 5, this);
    this.paddle = new Paddle(this.canvas.width - 30, 10, 10, 100, 10, 10 , true, this);
    this.paddle2 = new Paddle(10, 10, 10, 100, 10, 10, false, this);

    this.draw = function(){
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.draw(this.context);
        this.paddle.draw(this.context);
        this.paddle2.draw(this.context);
    }

    this.move = function(){
        this.ball.move();
        this.paddle.move(this.canvas);
        this.paddle2.move(this.canvas);
        this.ball.checkCollision(this.canvas);
    }

    this.update = function(){
        this.draw();
        this.move();
    }

    this.start = function(){
        setInterval(this.update.bind(this), 1000/60);
    }
    
    this.start();
}