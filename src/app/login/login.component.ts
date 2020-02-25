import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  results: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    let adminProfile = {
      
      password: this.registerForm.controls['password'].value,
      email: this.registerForm.controls['email'].value,

    }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post("http://192.168.3.235:3000/api/services/login",adminProfile).subscribe((res) => {
      this.results = res;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

      this.myRoute.navigate(["/dashboard"]);

      console.log("44", this.results)
    })
  }
  goToRegister(){
    this.myRoute.navigate(["/registor"]);

  }

}
