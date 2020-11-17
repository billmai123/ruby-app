import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EwalletListService} from '../../../data/service/ewalletList.service';
import { CouponInstanceModel } from '../../../data/models/couponInstance.model';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
//   heroes$: Observable<Hero[]>;
  selectedId: number;
  customerId:string;
  customerName:string;
  couponList:CouponInstanceModel[]=[];

  constructor(
    private route: ActivatedRoute,
    private ewalletListService:EwalletListService,
  ) {}

  ngOnInit() {
     var customerId:string='1';
     this.ewalletListService.getCouponList(customerId).subscribe((res)=>{
          console.log(res);
        this.couponList=res;
        this.customerId=this.couponList!=null?this.couponList[0].customer.id:null;
        this.customerName=this.couponList!=null?this.couponList[0].customer.name:null;
      });
    //  this.couponList=this.hardcode;
    //  this.customerId=this.couponList!=null?this.couponList[0].customer.id:null;
    //  this.customerName=this.couponList!=null?this.couponList[0].customer.name:null;
  }

  hardcode=[
    {
      "id": "a0U1s000000zjiIGAG",
      "couponCode": "CI-0003",
      "validFrom": "2020-11-01T00:00:00.000Z",
      "validTo": "2020-12-31T23:59:59.999Z",
      "status": "REDEEMED",
      "remainingUse": null,
      "remainingBalance": 0,
      "customer": {
        "id": "0011s00000O2cTOAAZ",
        "name": "Chan Tai Man"
      },
      "couponItem": {
        "id": "a6W1s0000008RPnEAM",
        "couponItemCode": "CLS0004",
        "couponType": "CASH",
        "name": "Mobile Handset $1000 Cash Coupon",
        "description": "Mobile Handset $1000 Cash Coupon",
        "imageUrl": "https://image.freepik.com/free-vector/discount-coupon-templates_23-2147499410.jpg",
        "glAccount": "GL-0001",
        "issueBu": "Mobile",
        "issueBrand": "CSL",
        "tnc": "T & C Content",
        "appliedBrand": [
          "CSL",
          "1010"
        ],
        "defaultExpiryDate": "2020-12-31T23:59:59.999Z",
        "validPeriodOffset": 0,
        "validPeriodLength": 180,
        "applyRuleSet": "RS-0001",
        "instanceLimit": 10000,
        "minOrderAmount": 0,
        "productPurchased": "SamsungS20",
        "isMultipleUse": false,
        "redemptionQuota": null,
        "initBalance": 1000,
        "giftProduct": null,
        "nonProductService": null,
        "discountedPrice": null,
        "discountRate": null,
        "loyaltyPointMultiplier": null,
        "loyaltyPointEarn": null
      }
    },
    {
      "id": "a0U1s000000zjiIPAD",
      "couponCode": "CI-0002",
      "validFrom": "2020-11-01T00:00:00.000Z",
      "validTo": "2020-12-31T23:59:59.999Z",
      "status": "REDEEMABLE",
      "remainingUse": null,
      "remainingBalance": 1000,
      "customer": {
        "id": "0011s00000O2cTOAAZ",
        "name": "Chan Tai Man"
      },
      "couponItem": {
        "id": "a6W1s0000008RPnEAM",
        "couponItemCode": "CLS0004",
        "couponType": "CASH",
        "name": "Mobile Handset $1000 Cash Coupon",
        "description": "Mobile Handset $1000 Cash Coupon",
        "imageUrl": "https://image.freepik.com/free-vector/discount-coupon-templates_23-2147499410.jpg",
        "glAccount": "GL-0001",
        "issueBu": "Mobile",
        "issueBrand": "CSL",
        "tnc": "T & C Content",
        "appliedBrand": [
          "CSL",
          "1010"
        ],
        "defaultExpiryDate": "2020-12-31T23:59:59.999Z",
        "validPeriodOffset": 0,
        "validPeriodLength": 180,
        "applyRuleSet": "RS-0001",
        "instanceLimit": 10000,
        "minOrderAmount": 0,
        "productPurchased": "SamsungS20",
        "isMultipleUse": false,
        "redemptionQuota": null,
        "initBalance": 1000,
        "giftProduct": null,
        "nonProductService": null,
        "discountedPrice": null,
        "discountRate": null,
        "loyaltyPointMultiplier": null,
        "loyaltyPointEarn": null
      }
    },
    {
      "id": "a0U1s000000zjiIEAQ",
      "couponCode": "CI-0001",
      "validFrom": "2020-11-01T00:00:00.000Z",
      "validTo": "2020-12-31T23:59:59.999Z",
      "status": "REDEEMABLE",
      "remainingUse": 1,
      "remainingBalance": null,
      "customer": {
        "id": "0011s00000O2cTOAAZ",
        "name": "Chan Tai Man"
      },
      "couponItem": {
        "id": "a6W1s0000008RQ2EAM",
        "couponItemCode": "CLS0007",
        "couponType": "CASH",
        "name": "Free SamsungS20 case",
        "description": "Free SamsungS20 case as free gift",
        "imageUrl": "https://image.freepik.com/free-vector/discount-coupon-templates_23-2147499410.jpg",
        "glAccount": "GL-0001",
        "issueBu": "Mobile",
        "issueBrand": "CSL",
        "tnc": "T & C Content",
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
    }
  ];
}