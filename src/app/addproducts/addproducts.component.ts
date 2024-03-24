import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private FB: FormBuilder, private http: HttpClient, private router: Router) { }

  addproductsform = this.FB.group(
    {
      product_image: ['',Validators.required],
      pName: ['',Validators.required],
      pDescription: ['',Validators.required],
      pPrice: ['',Validators.required],
      pDescriptionLong:[''],
      rating:[''],
      review:['']
     
    }
  )


  ngOnInit(): void {
  }
  addProducts() {
    if (this.addproductsform.valid) {
      console.log(this.addproductsform.value);
      this.http.post('http://localhost:3000/products', this.addproductsform.value).subscribe((res) => {
        if (res) {
          this.router.navigate(['/home'])
        }
      })

    }


  }

}
