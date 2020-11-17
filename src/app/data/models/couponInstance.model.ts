import { CustomerModel } from "./customer.model";
import { CouponItemModel } from "./couponItem.model";

export class CouponInstanceModel{
    id:string;
    couponCode:string;
    validFrom:string;
    validTo:string;
    status:string;
    remainingUse:number;
    remainingBalance:number;
    customer:CustomerModel;
    couponItem:CouponItemModel;
}