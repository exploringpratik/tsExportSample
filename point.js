"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        console.log("Constructor is called.");
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return Point;
}());
exports.Point = Point;
