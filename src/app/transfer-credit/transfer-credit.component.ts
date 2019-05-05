import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-transfer-credit',
  templateUrl: './transfer-credit.component.html',
  styleUrls: ['./transfer-credit.component.css']
})
export class TransferCreditComponent implements OnInit {
  constructor(public customerService: CustomerService) { }
  searchname = '';
  giveamount = 0;
  amount1 =  0;
  amount2 = 0;
  ngOnInit() {
  }
}
