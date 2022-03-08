class GameObject {
    /* Game Object Properties */
    #x;
    #y;
    #width;
    #height;
    #image;

    constructor(x, y, width, height, src) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#image = new Image();
        this.#image.src = src;
    }

    getWidth(){
        return this.#width;
    }
    getHeight(){
        return this.#height;
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }

    move(x, y) {
        console.log("Move to", x, y)
        this.#x = x;
        this.#y = y;
    }
        
    setImage(img){
        this.#image = img;
    }

    draw() {
        view.picture(this.#image, this.#x, this.#y, this.#width, this.#height);
    }
}