class paper extends baseClass {
     constructor (x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':0.8,
            'isStatic':false
     }
    super(x, y, 50, 50, options);
    this.image = loadImage("paper.png");
    }
}