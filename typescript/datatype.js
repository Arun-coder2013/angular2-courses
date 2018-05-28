//here the tye is number i.e 1,2,3,3.0,3.44 etc
var a;
a = 20;
a = 'Arun';
//here type is string, it will accept any string value.
var b;
b = 'Arun';
//here type is array of number.
var c = ['Arun', 'Rout'];
//here type is an object
var d;
//here type is any, by default type is any.it can accept 
//anything like var keyword in javascript.
var e;
e = [12, 3, 4, 5];
e = 2;
e = '';
//here type is constant 
var f = 10;
//type is enum. to declare multiple constants 
var color;
(function (color) {
    color[color["purple"] = 0] = "purple";
    color[color["red"] = 1] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
//to access enum 
var RedColor = color.red;
console.log(RedColor);
