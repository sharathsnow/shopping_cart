import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  searchedData=[]
  currentid : any;
  searctText;
  contactsArray= [
    {
      "id": 1,
      "name": "Elma Herring",
      "email": "elmaherring@unq.com",
      "phone": "+1 (913) 497-2020"
    },
    {
      "id": 2,
      "name": "Knapp Berry",
      "email": "knappberry@unq.com",
      "phone": "+1 (951) 472-2967"
    },
    {
      "id": 3,
      "name": "Bell Burgess",
      "email": "bellburgess@unq.com",
      "phone": "+1 (887) 478-2693"
    },
    {
      "id": 4,
      "name": "Hobbs Ferrell",
      "email": "hobbsferrell@unq.com",
      "phone": "+1 (862) 581-3022"
    },
    {
      "id": 5,
      "name": "Marylou Medina",
      "email": "maryloumedina@unq.com",
      "phone": "+1 (996) 520-2967"
    },
    {
      "id": 6,
      "name": "Larson Guerra",
      "email": "larsonguerra@unq.com",
      "phone": "+1 (972) 566-2684"
    },
    {
      "id": 7,
      "name": "Shelby Ballard",
      "email": "shelbyballard@unq.com",
      "phone": "+1 (824) 467-3579"
    },
    {
      "id": 8,
      "name": "Lea Faulkner",
      "email": "leafaulkner@unq.com",
      "phone": "+1 (899) 528-3402"
    },
    {
      "id": 9,
      "name": "Cecelia Wolf",
      "email": "ceceliawolf@unq.com",
      "phone": "+1 (862) 507-3140"
    },
    {
      "id": 10,
      "name": "Melva Nixon",
      "email": "melvanixon@unq.com",
      "phone": "+1 (901) 444-3081"
    },
    {
      "id": 11,
      "name": "Bernard Chambers",
      "email": "bernardchambers@unq.com",
      "phone": "+1 (831) 539-3366"
    },
    {
      "id": 12,
      "name": "Wendi Bender",
      "email": "wendibender@unq.com",
      "phone": "+1 (868) 414-2720"
    },
    {
      "id": 13,
      "name": "Wall Stewart",
      "email": "wallstewart@unq.com",
      "phone": "+1 (814) 558-3191"
    },
    {
      "id": 14,
      "name": "Howell Gilbert",
      "email": "howellgilbert@unq.com",
      "phone": "+1 (926) 512-3631"
    },
    {
      "id": 15,
      "name": "Nguyen Maxwell",
      "email": "nguyenmaxwell@unq.com",
      "phone": "+1 (838) 469-2152"
    },
    {
      "id": 16,
      "name": "Norris Hendricks",
      "email": "norrishendricks@unq.com",
      "phone": "+1 (818) 563-2900"
    },
    {
      "id": 17,
      "name": "Salinas Mcleod",
      "email": "salinasmcleod@unq.com",
      "phone": "+1 (888) 413-3775"
    },
    {
      "id": 18,
      "name": "Michelle Barrett",
      "email": "michellebarrett@unq.com",
      "phone": "+1 (988) 446-2594"
    },
    {
      "id": 19,
      "name": "Burke Barlow",
      "email": "burkebarlow@unq.com",
      "phone": "+1 (965) 492-2552"
    },
    {
      "id": 20,
      "name": "Rosie Cummings",
      "email": "rosiecummings@unq.com",
      "phone": "+1 (845) 456-2237"
    },
    {
      "id": 21,
      "name": "Sanford Frye",
      "email": "sanfordfrye@unq.com",
      "phone": "+1 (936) 581-3494"
    },
    {
      "id": 22,
      "name": "Janna Peck",
      "email": "jannapeck@unq.com",
      "phone": "+1 (824) 512-2437"
    },
    {
      "id": 23,
      "name": "Lorraine Sykes",
      "email": "lorrainesykes@unq.com",
      "phone": "+1 (959) 422-3635"
    },
    {
      "id": 24,
      "name": "Vicki Fulton",
      "email": "vickifulton@unq.com",
      "phone": "+1 (916) 455-2402"
    },
    {
      "id": 25,
      "name": "Massey Moody",
      "email": "masseymoody@unq.com",
      "phone": "+1 (840) 453-3811"
    },
    {
      "id": 26,
      "name": "Grant Berg",
      "email": "grantberg@unq.com",
      "phone": "+1 (837) 554-3706"
    },
    {
      "id": 27,
      "name": "Hawkins Winters",
      "email": "hawkinswinters@unq.com",
      "phone": "+1 (945) 469-2432"
    },
    {
      "id": 28,
      "name": "Frazier Davidson",
      "email": "frazierdavidson@unq.com",
      "phone": "+1 (854) 558-2637"
    },
    {
      "id": 29,
      "name": "Francine Cervantes",
      "email": "francinecervantes@unq.com",
      "phone": "+1 (923) 520-2916"
    },
    {
      "id": 30,
      "name": "Francis Perez",
      "email": "francisperez@unq.com",
      "phone": "+1 (885) 461-3054"
    }
  ]

    constructor(private cs:CommonService , private route:ActivatedRoute) {
      this.cs.cartChanged.subscribe(()=>{
        this.cartitems=this.cs.cart



        
      })
     }
    cartitems=[]
    ngOnInit(): void {
      this.currentid=this.route.snapshot.params.id
      this.cartitems=this.cs.cart
     
    }
    startSearch(){
      this.searchedData=this.contactsArray.filter(item=>(item.name.toLocaleLowerCase().includes(this.searctText.toLocaleLowerCase())||item.phone.includes(this.searctText))?item:'')
    }
    removeProduct(item){
      this.cs.cart.splice(this.cs.cart.indexOf(item),1)
      alert('product removed from your cart')
      this.cs.cartChanged.next()
   
    }

  }
  
