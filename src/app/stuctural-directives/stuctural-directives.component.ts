import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural-directives',
  templateUrl: './stuctural-directives.component.html',
  styleUrls: ['./stuctural-directives.component.css']
})
export class StucturalDirectivesComponent implements OnInit {

  viewMode = "view";
  courses:[{}] ;
  loadCourse(){
     this.courses = [
   { id: 1,name: 'Anagular1'},
   { id: 2,name: 'Anagular2'},
   { id: 3,name: 'Anagular3'},
   { id: 4,name: 'Anagular4'}
  ];
  }
  trackCourses(course){
   return course ? course.id : undefined;
  }

  onAdd(course){
    let length = this.courses.length + 1;
    this.courses.push({id:length,name:'Angular'+this.courses.length});
  }
  onRemove(course){
  let index = this.courses.indexOf(course);
  this.courses.splice(index,1);
  }
  isCoursesAvailable():boolean{
    if ( this.courses.length > 0) {
        return true;
    } else {
       return false;  
    }
     
    }

   constructor() { }

  ngOnInit() {
  }

}
