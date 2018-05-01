
class PointAccessSpecifier{
    //There are three type of access specifier
    //public, private and protected
    //default access specifier is public
    // x:number;
    // y:number;
    // //constructor is used to initialize the data member
    // constructor(x:number,y:number){
    //     this.x = x;
    //     this.y = y;
    // }
    //shortcut way of writing data members
constructor(public x:number,public y:number){}
    draw(){
        console.log(this.x);
        console.log(this.y);
    }
}
//here parameters are mandaory
let i = new PointAccessSpecifier(20,10);
i.draw();