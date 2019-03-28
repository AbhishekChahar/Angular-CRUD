import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  form = new FormGroup( {
    $key: new FormControl(null),
    fullname: new FormControl('' , Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('',[ Validators.required, Validators.minLength(8)]),
    location: new FormControl(''),
  });
}
