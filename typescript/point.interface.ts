interface Point {
    x:number,
    y:number,
    
}

let drawDistance = (point :Point) =>{
   
    console.log(point.x);
    console.log(point.y);
}
drawDistance({x:10,y:20});