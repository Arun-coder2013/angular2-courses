"use strict";
exports.__esModule = true;
var LikeComponents = /** @class */ (function () {
    function LikeComponents() {
        this.count = 10;
        this.isSelected = true;
    }
    LikeComponents.prototype.onClicked = function () {
        this.count += this.isSelected ? -1 : 1;
        this.isSelected = !this.isSelected;
        console.log(this.count);
        console.log(this.isSelected);
    };
    return LikeComponents;
}());
exports.LikeComponents = LikeComponents;
var like = new LikeComponents();
like.onClicked();
