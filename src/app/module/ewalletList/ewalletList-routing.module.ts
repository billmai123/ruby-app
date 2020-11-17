import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CouponListComponent }    from './coupon-list/coupon-list.component';
import { CouponDetailComponent }  from './coupon-detail/coupon-detail.component';

const couponRoutes: Routes = [
  { path: 'couponList', redirectTo: '/coupons' },
  { path: 'couponDetail/:id', redirectTo: '/coupon/:id' },
  { path: 'coupons',  component: CouponListComponent, data: { animation: 'couponList' } },
  { path: 'coupon/:id', component: CouponDetailComponent, data: { animation: 'couponDetail' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(couponRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EwalletListRoutingModule { }