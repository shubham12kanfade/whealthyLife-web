import { OrderPaymentComponent } from './order-payment/order-payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


const routes: Routes = [
 {path:'',component : OrderComponent},
 { path : 'Order_information/:id', component: OrderInformationComponent },
 { path : 'Product_Details/:id', component: DetailsProductComponent},
 { path : 'AddToCart/:id', component: AddToCartComponent},
 { path:  'Payment/:id' , component: OrderPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
