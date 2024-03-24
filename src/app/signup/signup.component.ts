import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  savedData: any;

  constructor(private FB: FormBuilder, private http: HttpClient, private router: Router) { }

  signupform = this.FB.group(
    {
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      phone_number: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    }
  )


  ngOnInit(): void {
  }
  doSignUp() {
   

    if (this.signupform.valid) {
      console.log(this.signupform.value);
      this.http.post('http://localhost:3000/users', this.signupform.value).subscribe((res) => {
        if (res) {
          this.router.navigate(['/login'])
        }
   
   


        })
            
      

      }
  //     if(this.signupform.contains){
  //     this.http.get('http://localhost:3000/users').subscribe((resp)=>{
  //       this.savedData=resp
  //     const savedUser=this.savedData.find((s)=>{return s.email===this.signupform.value.email&& s.password===this.signupform.value.password})
  //     if(savedUser){
  //  alert(" please login your alredy registerd")
  //     }
  //   }
  
  } 

}
  
