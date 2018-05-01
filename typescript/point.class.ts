
class Point{
    x:number;
    y:number;
    //constructor is used to initialize the data member
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log(this.x);
        console.log(this.y);
    }
}

let po = new Point(20,10);
po.draw();