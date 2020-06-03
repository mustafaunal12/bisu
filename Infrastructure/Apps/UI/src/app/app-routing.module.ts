import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "subscription"},
  {path: "subscription", component: SubscriptionComponent},
  {path: "order", component: OrderComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }