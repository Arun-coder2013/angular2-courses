import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  form : FormGroup;
  constructor(private _fb:FormBuilder) { 

  }
  
  ngOnInit() {
    this.form = this._fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    });
  }
  get username(){return this.form.get('username');}
  get email(){return this.form.get('email');}
  get phone(){return this.form.get('phone');}

}
