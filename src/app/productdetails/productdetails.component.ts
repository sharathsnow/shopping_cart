import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
   
  productList=[]
  currentid: any;
  currentProduct;
  reviewText='';
  selectedRating='';
  constructor(private http:HttpClient,private route:ActivatedRoute , private cs:CommonService) { }

  ngOnInit(): void {
    this.currentid=this.route.snapshot.params.id
    this.http.get("http://localhost:3000/products").subscribe((res:any)=>{
      if (res){
        this.productList=res
        console.log(this.productList)
        this.currentProduct=this.productList.find((r)=>{
          return(r.id==this.currentid)
        })
        console.log(this.currentProduct)
      }  
    })
  }
  updateRating(val){
    this.selectedRating=val
  }

  addtoCart(item){
    this.cs.cart.push(item)
 alert('product added to your cart')
 this.cs.cartChanged.next()
  }
  SubmitRating(){
    const tempObj={
      rating:this.selectedRating,
      review:this.reviewText,
    }
    if(this.selectedRating!==""&&this.reviewText!==""){
    this.http.patch("http://localhost:3000/products/"+this.currentid,tempObj).subscribe((res:any)=>{
    alert("Thanks for sumbiting review")
    })
    }else{

      alert("Please Select Rating to Submit")
    }
    

    
    

  }

}
