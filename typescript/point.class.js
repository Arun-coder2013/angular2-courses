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
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var po = new Point(20);
// po.X=10;
po.Y = 20;
var xtest = po.X;
var ytest = po.Y;
console.log(xtest, ytest);
po.draw();
