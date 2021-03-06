import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( public firebase: AngularFireDatabase) { }
   customerList: AngularFireList<any>;
  form: FormGroup = new FormGroup( {
    $key: new FormControl(null),
    fullName: new FormControl('' , Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [ Validators.required, Validators.minLength(8)]),
    location: new FormControl(''),
    credits: new FormControl ('', Validators.required)

  });

  getCustomers(customer) {
   this.customerList = this.firebase.list('customers');
   return this.customerList.snapshotChanges();
  }
  insertCustomer(customer: { fullName: any; email: any; mobile: any; location: any; credits: any }) {
   this.customerList.push({
     fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
     location: customer.location,
     credits: customer.credits
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
        location: customer.location,
        credits: customer.credits

      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }

}
