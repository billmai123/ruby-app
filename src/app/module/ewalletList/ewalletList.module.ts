import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CouponListComponent }    from './coupon-list/coupon-list.component';
import { CouponDetailComponent }  from './coupon-detail/coupon-detail.component';

import { EwalletListRoutingModule } from './ewalletList-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EwalletListRoutingModule,
    QRCodeModule
  ],
  declarations: [
    CouponListComponent,
    CouponDetailComponent
  ]
})
export class EwalletListModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/