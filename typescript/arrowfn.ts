let noParamFn = () =>console.log('No parameter function');
let oneParamFn = (x) =>{console.log('One parameter function',x);}
let oneParamFnAlt1 = x=>console.log('One parameter function',x);
let oneParamFnAlt2 = (x:string) =>console.log('One explicit parameter function',x);
let twoParamFnAlt2 = (x,y) =>console.log('Two  parameter function',x,y);

noParamFn();
oneParamFn('Arun');
oneParamFn(10);
oneParamFn({x:20,y:30});
oneParamFnAlt1(22);
oneParamFnAlt2('Lets play');
