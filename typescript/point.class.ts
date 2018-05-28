
class Point{
       //constructor is used to initialize the data member
    constructor(private x?:number,private y?:number){}
    
    draw(){
        console.log(this.x);
        console.log(this.y);
    }
    set X(x:number){
        this.x=x;
    }
    set Y(y:number){
        this.y=y;
    }
    get X(){
        return this.x;
    }
    get Y(){
        return this.y;
    }
}

let po = new Point(20);
// po.X=10;
po.Y=20;
let xtest = po.X;
let ytest = po.Y;
console.log(xtest,ytest);
po.draw();