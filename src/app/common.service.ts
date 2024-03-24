import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
   
   isLoggedin=new Subject();

   cartChanged=new Subject
  cart=[]


}
