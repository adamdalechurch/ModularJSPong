export function Paddle(x, y, width, height, dx, dy, isNpc, pong){
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

    this.move = function(canvas){
        if(isNpc){
           // move toward ball:
            if(this.pong.ball.y < this.y){
                  this.y -= this.dy;
             }else if(this.pong.ball.y > this.y + this.height){
                  this.y += this.dy;
             }
        }else{
            if(this.y < 0){
                this.y = 0;
            }else if(this.y + this.height > canvas.height){
                this.y = canvas.height - this.height;
            }
        }
    }
}
