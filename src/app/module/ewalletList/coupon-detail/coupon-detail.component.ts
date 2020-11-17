import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {EwalletListService} from '../../../data/service/ewalletList.service';
import { CouponInstanceModel } from '../../../data/models/couponInstance.model';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.scss']
})
export class CouponDetailComponent implements OnInit {

   couponDetail:CouponInstanceModel=null;

  constructor(
    private ewalletListService:EwalletListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}


  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.ewalletListService.getCouponDetail(this.route.snapshot.params.id).subscribe((res)=>{
       console.log(res);
       this.couponDetail=res;
    });
    // this.couponDetail=this.hardCode;
    
  }

    private hardCode:CouponInstanceModel={
      "id": "a0U1s000000zjiIEAQ",
      "couponCode": "CI-0001",
      "validFrom": "2020-11-01T00:00:00Z",
      "validTo": "2020-12-31T23:59:59.999Z",
      "status": "REDEEMABLE",
      "remainingUse": 1,
      "remainingBalance": 122,
      "customer": {
        "id": "0011s00000O2cTOAAZ",
        "name": "ChanTaiMan"
      },
      "couponItem": {
        "id": "a6W1s0000008RQ2EAM",
        "couponItemCode": "CLS0007",
        "couponType": "GIFT",
        "name": "FreeSamsungS20case",
        "description": "FreeSamsungS20caseasfreegift",
        "imageUrl": "https://image.freepik.com/free-vector/discount-coupon-templates_23-2147499410.jpg",
        "glAccount": "GL-0001",
        "issueBu": "Mobile",
        "issueBrand": "CSL",
        "tnc": "T&CContent",
        "appliedBrand": [
          "CSL",
          "1010"
        ],
        "defaultExpiryDate": "2020-12-31T23:59:59.999Z",
        "validPeriodOffset": 0,
        "validPeriodLength": 30,
        "applyRuleSet": "RS-0001",
        "instanceLimit": 10000,
        "minOrderAmount": 1000,
        "productPurchased": null,
        "isMultipleUse": false,
        "redemptionQuota": 1,
        "initBalance": null,
        "giftProduct": "SamsungS20Case",
        "nonProductService": null,
        "discountedPrice": 0,
        "discountRate": null,
        "loyaltyPointMultiplier": null,
        "loyaltyPointEarn": null
      }
    };
}