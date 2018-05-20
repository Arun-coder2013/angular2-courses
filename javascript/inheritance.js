function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

function Human() {
  this.name = {
    first:'Arun',
    last:'Rout'
  };
  this.age = 35;
  this.gender = 'male';
  this.interests = 'Passonate about teaching';
};

Person.prototype={
	greeting:function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
};

var person1 = new Person('John','Frank',30,'male','He is passonate about Javascript');
var person2 = new Person('John1','Frank1',31,'male','He is passonate about Javascript');



function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  //Person.call(this);

  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var teacher1 = new Teacher('John1','Frank1',30,'male','He is passonate about Javascript','English');



function Brick() {
  this.width = 10;
  this.height = 20;
}

function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

var blueBricks = new BlueGlassBrick();