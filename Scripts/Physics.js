class Physics {
    /* Physics Properties */
    #speed;
    #gravity;
    #terminal;
    #velocityX;
    #velocityY;
    #friction;
    
    constructor(speed) {
        this.#speed = speed;
        this.#gravity = 0.3;
        this.#terminal = 8;
        this.#velocityX = 0.0;
        this.#velocityY = 0.0;
        this.#friction = 0.8;
    }
    
    jump(){
        this.#velocityY = -this.#speed*2;
    }
    applyGravity() {
        if (this.#velocityY < this.#terminal) {
            this.#velocityY += this.#gravity;
        }
    }
    applyFriction() {
        this.#velocityX *= this.#friction;
    }

    checkCollisions(blocks, player){
        for(let block of blocks){
            if(block.isTouching(player)){
                this.checkCollisionFloor(block, player);
                this.checkCollisionCeiling(block, player);
                this.checkCollisionRight(block, player);
                this.checkCollisionLeft(block, player);
            }
        }
    }

    checkCollisionFloor(block, player){
        if(player.getY() < block.getY() && this.#velocityY > 0) {
            if (block.isTouchingX(player, 0.5)) {
                this.#velocityY = 0;
                player.isJumping(false);
            }
        }
    }

    checkCollisionCeiling(block, player) {
        if(player.getY() > block.getY() && this.#velocityY < 0){
            this.#velocityY *= -0.5;
        }
    }
    checkCollisionRight(block, player) {
        if(player.getX() < block.getX() && this.#velocityX > 0){
            if( block.isTouchingY(player, 0.5) ){
                this.#velocityX *= -1;
            }
            
        }
    }
    checkCollisionLeft(block, player) {
        if(player.getX() > block.getX() && this.#velocityX < 0){
            if( block.isTouchingY(player, 0.5) ){
                this.#velocityX *= -1;
            }
            
        }
    }

    update(blocks, player) {
        this.applyGravity();
        this.applyFriction();
        this.checkCollisions(blocks, player);
        
    }

    getVelocityX() {
        return this.#velocityX;
    }
    
    getVelocityY() {
        return this.#velocityY;
    }  

    moveLeft() {
        if(this.#velocityX > -this.#speed) {
            this.#velocityX--;
        }
    }

    moveRight() {
        if(this.#velocityX < this.#speed){
            this.#velocityX++;
        }
    }

}