import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  form = new FormGroup( {
    fullname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    location: new FormControl(''),
  });
}
