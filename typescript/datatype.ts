//here the tye is number i.e 1,2,3,3.0,3.44 etc
let a:number;
a=20;
a='Arun';
//here type is string, it will accept any string value.
let b: string;
b='Arun';

//here type is array of number.
let c:string[] =['Arun','Rout'];
//here type is an object
let d:[{name:'Arun',title:'Rout'}];
//here type is any, by default type is any.it can accept 
//anything like var keyword in javascript.
let e;
e=[12,3,4,5];
e=2;
e=''
//here type is constant 
  const f = 10;
  
  //type is enum. to declare multiple constants 
  enum color {purple,red,green=1,blue=2};
  //to access enum 
  let RedColor = color.red;
 console.log(RedColor);


