var Point = /** @class */ (function () {
    //constructor is used to initialize the data member
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return Point;
}());
var po = new Point(20, 10);
po.draw();
