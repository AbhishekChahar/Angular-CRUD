import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( public firebase: AngularFireDatabase) { }
   customerList: AngularFireList<any>;
form = new FormGroup( {
    $key: new FormControl(null),
    fullname: new FormControl('' , Validators.required),
    email: new FormControl('', Validators.email),
      mobile: new FormControl('', [ Validators.required, Validators.minLength(8)]),
      location: new FormControl(''),

  });

  getCustomer(customer){
   this.customerList = this.firebase.list('customers');
   return this.customerList.snapshotChanges();
  }
  insertCustomer(customer){
   this.customerList.push({
     fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
     location: customer.location
   });
  }

  populateForm(customer){
    this.form.setValue(customer);
  }

  updateCustomer(customer){
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location

      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

}
