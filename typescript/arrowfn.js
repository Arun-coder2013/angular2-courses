var noParamFn = function () { console.log('No parameter function'); };
var oneParamFn = function (x) { console.log('One parameter function', x); };
var oneParamFnAlt1 = function (x) { return console.log('One parameter function', x); };
var oneParamFnAlt2 = function (x) { return console.log('One explicit parameter function', x); };
noParamFn();
oneParamFn('Arun');
oneParamFn(10);
oneParamFn({ x: 20, y: 30 });
oneParamFnAlt1(22);
oneParamFnAlt2('Lets play');