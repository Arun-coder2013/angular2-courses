//Constructor function
function Apple( x, y, color, score )
{   
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

Apple.prototype ={
	eat: function(){return 'this is apple object';}
}
var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );


//Simple Object
apple={
	height: 200,
	weight:300,
	eat: function(){return 'this is apple object';}
}

//Adding properties to prototype
var app = Object.create(apple);
var app2 = Object.create(apple);

//Creating person using Object() method
var person1 = new Object();

person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

var person2 = Object.create(person1);