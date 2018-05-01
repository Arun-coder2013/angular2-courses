
export class LikeComponents{
    count=10;
    isSelected=true;
    onClicked(){
        this.count += this.isSelected ? -1:1;
        this.isSelected = !this.isSelected;
        console.log(this.count);
        console.log(this.isSelected);
    }
}

let like = new LikeComponents();
like.onClicked();