import { PasswordValidator } from './password.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chnage-password',
  templateUrl: './chnage-password.component.html',
  styleUrls: ['./chnage-password.component.css']
})
export class ChnagePasswordComponent implements OnInit {

  form : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword : ['',Validators.required,
        PasswordValidator.validOldPassword],
      newPassword : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    },{
      validator : PasswordValidator.passwordsShouldMatch
    });
  }
  get oldPassword(){return this.form.get('oldPassword');}
  get newPassword(){return this.form.get('newPassword');}
  get confirmPassword(){return this.form.get('confirmPassword');}

}
