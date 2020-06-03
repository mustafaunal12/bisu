import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  phoneNumber = "";
  subscriptions = [];
  error;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  public async getCustomerInfo() {
    this.dataService.getCustomerInfo(this.phoneNumber)
      .subscribe(
        data => {
          this.subscriptions = data;
          this.error = undefined;
        },
        err => {
          this.error = err;
          this.subscriptions = [];
        });
  }

}