import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  highlightColor = 'yellow'
//adress is undefined
  address: Address;
  constructor() { }

  ngOnInit() {

    setTimeout(()=>{

      console.log('time out called');
this.address = {
  city :'chennai',
  state : 'TN'
};
    }, 3000 );
  }

}
