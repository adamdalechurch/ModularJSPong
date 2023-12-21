export function Ball(x, y, width, height, dx, dy, pong){
    this.pong = pong;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(context){
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    this.move = function(){
        this.x += this.dx;
        this.y += this.dy;
    }

    this.checkCollision = function(canvas){
        // colide with boundaries
        if(this.y < 0 || this.y + this.height > canvas.height){
            this.dy = -this.dy;
        }

        if(this.x < 0 || this.x + this.width > canvas.width){
            this.dx = -this.dx;
        }

        if(this.x < 0){
            this.x = 0;
        }else if(this.x + this.width > canvas.width){
            this.x = canvas.width - this.width;
        }

        // collide with paddles
        if(this.x < this.pong.paddle2.x + this.pong.paddle2.width && this.x + this.width > this.pong.paddle2.x && this.y < this.pong.paddle2.y + this.pong.paddle2.height && this.y + this.height > this.pong.paddle2.y){
            this.dx = -this.dx;
        }

        if(this.x < this.pong.paddle.x + this.pong.paddle.width && this.x + this.width > this.pong.paddle.x && this.y < this.pong.paddle.y + this.pong.paddle.height && this.y + this.height > this.pong.paddle.y){
            this.dx = -this.dx;
        }
    }
}