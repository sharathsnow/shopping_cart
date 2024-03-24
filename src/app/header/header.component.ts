import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isValidUser=false;
  cartItems=0;
  constructor (private router:Router, private cs:CommonService) {
    this.cs.isLoggedin.subscribe((d)=>{
     if (d==true){
       this.isValidUser=true
     } 
    })
    this.cs.cartChanged.subscribe(()=>{
   this.cartItems=this.cs.cart.length
    })
   }

  ngOnInit(): void {
    if(localStorage.getItem('isLoging')=='true'){
      this.isValidUser=true;
    }
  }
  logout(){
   localStorage.setItem('isLoging',"false");
   this.isValidUser=false;
   this.router.navigate(['/login'])
  }

}
