import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  // results: Object;

  // constructor(private http:HttpClient) { }

  // ngOnInit() {
  //   this.http.get("http://192.168.3.235:3000/api/services/get").subscribe((res)=>{
  //     this.results=res;
  //     console.log("111",this.results)
  //   })
  
  // }
  registerForm: FormGroup;
  submitted = false;
  results: any;
  studentDetails:any=[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      mobile_number: ['', Validators.required],
      date_of_birtday: ['', Validators.required],
      date_of_join: ['', Validators.required],
      gender: ['', Validators.required],


    });
    this.getData();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    let adminProfile = {
      name: this.registerForm.controls['name'].value,
      father_name: this.registerForm.controls['father_name'].value,
      mother_name: this.registerForm.controls['mother_name'].value,
      mobile_number: this.registerForm.controls['mobile_number'].value,
      date_of_birtday: this.registerForm.controls['date_of_birtday'].value,
      date_of_join: this.registerForm.controls['date_of_join'].value,
      gender: this.registerForm.controls['gender'].value,


    }
    console.log("555",adminProfile)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post("http://192.168.3.235:3000/api/services/storeData", adminProfile).subscribe((res) => {
      this.results = res;
      //this.myRoute.navigate(["/dashboard"]);

      console.log("44", this.results)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this.getData();
  }
getData(){
  this.http.get("http://192.168.3.235:3000/api/services/get").subscribe((res)=>{
        this.results=res;
        this.studentDetails=this.results['data']
        console.log("111",this.studentDetails)
      })
}

}
