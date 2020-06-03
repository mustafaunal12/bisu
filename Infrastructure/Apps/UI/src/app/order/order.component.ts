import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  subscriptionId = "";
  orders = [];
  error;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  public async getSubscriptionOrders() {
    this.dataService.getSubscriptionOrders(this.subscriptionId)
      .subscribe(
        data => {
          this.orders = data;
          this.error = undefined;
        },
        err => {
          this.error = err;
          this.orders = [];
        });
  }

}
