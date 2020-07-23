import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderInformationComponent } from './order-information/order-information.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';


@NgModule({
  declarations: [OrderComponent, OrderInformationComponent, DetailsProductComponent, AddToCartComponent, OrderPaymentComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
