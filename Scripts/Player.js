class Player extends GameObject {
    /* Player Properties */
    #physics;
    //protects us from having flappy bird style game
    #isJumping;
    #currentPose;

    constructor(x, y) {
        super(x*Block.SIZE, y*Block.SIZE, Block.SIZE, Block.SIZE, "Assets/link-down.png");
        
        console.log("player coordinates", x*Block.SIZE, y*Block.SIZE);
        this.#physics = new Physics(4);
        this.#isJumping = false;
        this.#currentPose = Pose.RIGHT;
        super.setImage(this.#currentPose.getImage());
    }

    move() {
        const dx = this.getX() + this.#physics.getVelocityX();
        const dy = this.getY() + this.#physics.getVelocityY();
        super.move(dx, dy);
    }

    moveLeft() {
        this.#physics.moveLeft();
        this.#currentPose = Pose.LEFT;
    }

    moveRight(){
        this.#physics.moveRight();
        this.#currentPose = Pose.RIGHT;
    }

    jump() {
        if (this.#isJumping === false) {
            this.#physics.jump();
            this.#isJumping = true;
        }
    }

    isJumping(isJumping){
        this.#isJumping = isJumping;
    }

    update(blocks) {
        this.#physics.update(blocks, this);
        this.move();
        // console.log("this is the player's x value = "+this.x);
        // console.log("this is the player's y value = "+this.y);
    }

    draw() {
        super.setImage( this.#currentPose.getImage());
        super.draw();
    }

}