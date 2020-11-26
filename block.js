class dust extends baseClass {
    constructor (x, y) {
        var options = {
            isStatic:true
        }
        super(x, y, 115, 10, options);
        this.image = loadImage("dustbingreen.png");
    }
}