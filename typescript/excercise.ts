
export class LikeComponents{
    count=10;
    isSelected=false;
    onClicked(){
        this.count += this.isSelected ? -1:1;
        this.isSelected = !this.isSelected;
        console.log(this.count);
        console.log(this.isSelected);
    }
}

