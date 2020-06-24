import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { _UserState } from 'src/app/store/reducers/user.reducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesState } from 'src/app/store/reducers/countries.reducer';
import { CitiesState } from 'src/app/store/reducers/cities.reducer';
import { CrossFieldErrorMatcher } from 'src/app/cross-field-error-matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  @Input() user: _UserState;
  @Input() countries: CountriesState;
  @Input() cities: CitiesState;
  filteredCities: CitiesState;
  
  personalDetailsForm: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef) {}

  ngOnInit() {
    //this.cd.detectChanges();
    if (this.countries.data != {}) console.log(this.countries.data);
    this.personalDetailsForm = this.fb.group({
      email: ['', Validators.required],
      // password: ['', Validators.required],
      // confirmPassword: ['', {validator: this.passwordValidator}],
      passwords: this.fb.group({
        password: ['', Validators.required],
        repeat:   ['', Validators.required]
      }, {validator: this.matchValidator}),
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ''
    });
  }

  onSubmit(form) {
    console.log(this.personalDetailsForm.controls['email']);
    console.log(form);
  }

  onValueChange(data) {
    console.log(this.cities);
    if(data.country){
      //this.filteredCities = this.cities.filter(city=> city.countryId === data.country.id);

    }
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('confirmPassword').value;

    return condition ? { passwordsDoNotMatch: true} : null;
  }

  matchValidator(group: FormGroup) {
    if (group.value['password'] != '' && group.value['repeat']) {
    if (group.controls['password'].value == group.controls['repeat'].value) {
      return null
    }
  }
  
    return {
      mismatch: true
    };
  }

}
