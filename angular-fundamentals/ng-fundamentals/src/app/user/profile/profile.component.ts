import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: "./profile.component.html",
  styles: [
    `em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999;}
    .error :-ms-input-placeholder { color: #999; }
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    let currentUser = this.authService.currentUser;
    let commonValidators = [Validators.required, Validators.pattern("[a-zA-Z].*")];
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl(currentUser ? currentUser.firstName : "", commonValidators),
      lastName: new FormControl(currentUser ? currentUser.lastName : "", commonValidators)
    });
  }

  cancel() {
    this.goToMain();
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.goToMain();
    }
  }

  validateFirstName() {
    let firstNameControl = this.profileForm.get("firstName");
    return firstNameControl.valid || firstNameControl.untouched;
  }

  validateLastName() {
    let lastNameControl = this.profileForm.get("lastName");
    return lastNameControl.valid || lastNameControl.untouched;
  }

  private goToMain() {
    this.router.navigateByUrl("events");
  };
}
