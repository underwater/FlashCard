import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hasError: boolean = false;
  errors: string[] = [];

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)])
  });


  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  async submit() {
    this.hasError = false;
    if (this.form.valid) {
      try {
        await this._authService.signIn(this.form.value);
      }
      catch(err) {
        this.hasError = true;
      }
    }

  }
}
