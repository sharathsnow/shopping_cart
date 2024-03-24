import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  constructor(private http:HttpClient) { }
  prodctList=[]
  ngOnInit(): void {
    this.http.get("http://localhost:3000/products").subscribe((res:any)=>{
      if (res){
        this.prodctList=res
        console.log(this.prodctList)
      }
      
    })
  }

}
