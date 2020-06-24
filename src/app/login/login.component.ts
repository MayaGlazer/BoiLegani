import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { _UserState } from '../store/reducers/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user: _UserState;
  loginForm: FormGroup;
  errormsg = 'Error';
  hide = true;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  onSubmit(form) {
    console.log(this.loginForm.controls['email']);
    console.log(form);
  }

}
