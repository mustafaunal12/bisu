import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private getCustomerInfoUrl = (phoneNumber) => `http://api/getCustomerInfo/${phoneNumber}`;
  private getSubscriptionOrdersUrl = (subscriptionId) => `http://api/getSubscriptionOrders/${subscriptionId}`;

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError({ status: error.status, message: error.error.message });
  }

  public getCustomerInfo(phoneNumber: string) {
    return this.httpClient.post<[]>(this.getCustomerInfoUrl(phoneNumber), null).pipe(retry(3), catchError(this.handleError));
  }
  public getSubscriptionOrders(subscriptionId: string) {
    return this.httpClient.post<[]>(this.getSubscriptionOrdersUrl(subscriptionId), null).pipe(retry(3), catchError(this.handleError));
  }
}