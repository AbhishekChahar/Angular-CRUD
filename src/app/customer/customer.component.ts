import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CustomerService } from '../shared/customer.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  searchText: string;

  constructor(public  customerService: CustomerService) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.customerService.form.controls;

  ngOnInit() {

      const source = of('This is');
      const example = source.pipe(mergeMap(val => of(`${val} it!!!!`)));
      const subscribed = example.subscribe(val => console.log(val));

      const myobservable = of(1, 2 , 3 );
      const myObserver = {
        next: x => console.log('observer got a next value'+x),
        error: err => console.error('observer got an error'+ err),
        complete: () => console.log('Observer gota complete notificatipon')
      };
      myobservable.subscribe(myObserver);


      function sequenceSubscriber(observer){
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
        return {unsubscribe(){}};
      }
      const sequence = new Observable(sequenceSubscriber);
      sequence.subscribe({
        next(num){ console.log(num);},
        complete() {console.log('Finished Sequence'); }
      });


  }

   onSubmit() {
     this.submitted = true;
     if ( this.customerService.form.valid ) {
        if (this.customerService.form.get( '$key' ).value == null) {
          this.customerService.insertCustomer(this.customerService.form.value);
        } else {
          this.customerService.updateCustomer(this.customerService.form.value);
          }
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        }
     this.submitted = false;
     this.customerService.form.reset();                       //this is resetting the input forms for fresh record reset is a
                                                              //method of form class of reactive forms module
   }

   filterCondition(customer){
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  }

