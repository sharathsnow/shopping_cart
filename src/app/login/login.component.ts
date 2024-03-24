import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersData: any;
  
  constructor(private http:HttpClient, private router:Router,private cs:CommonService,private FB: FormBuilder) { }


  loginform = this.FB.group(
    {
      userEmail: ['',Validators.required],
      userPassword: ['',Validators.required]
    }
  )

  url="http://localhost:3000/users";

  ngOnInit(): void {
  }
  signin(){
    this.http.get(this.url).subscribe((res)=>{
      this.usersData=res

        const searchedUser=this.usersData.find((d)=>{return d.email===this.loginform.value.userEmail&& d.password===this.loginform.value.userPassword})
       if(searchedUser){
        localStorage.setItem('isLoging',"true")
        this.router.navigate(['/home'])
        this.cs.isLoggedin.next(true)
       }else{
    alert("please enter correct details")
       }
    })

   
 
}
}
