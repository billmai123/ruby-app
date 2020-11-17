import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { CouponInstanceModel } from '../models/couponInstance.model'
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class EwalletListService{
    // https://limitless-shore-06854.herokuapp.com/ewallet/api/coupon/instance/
    //https://limitless-shore-06854.herokuapp.com/ewallet/api/coupon/instance

       constructor(
          private http: HttpClient,
       ) {}

       defaultHeader = { 'Content-Type': 'application/json' };

      private url:string="https://limitless-shore-06854.herokuapp.com/ewallet/api/coupon/instance";

      private key:string="zKgVhnv#";

      getCouponList(customerId:string):Observable<any>{
        const httpOptions = {
          headers: new HttpHeaders({
           'Accept': 'application/json',
           'key':'zKgVhnv#',
         })
        };
        console.log(httpOptions);
        console.log(this.http);
        return this.http.get(this.url+'?customerId='+customerId+'&statusIncluded=ALL',httpOptions).pipe(
               catchError(this.handleError)
        );
      }

      getCouponDetail(couponCode:string):Observable<any>{
           //this.url="https://www.baidu.com";
           const header=
             { 'Content-Type': 'application/json','key':this.key };
             var result=null;
          // let httpOptions:HttpHeaders = new HttpHeaders();
          // httpOptions.set('key','zKgVhnv#');
          const httpOptions = {
               headers: new HttpHeaders({
                'Accept': 'application/json',
                'key':'zKgVhnv#',
                'Access-Control-Allow-Origin':'*'
                // 'Access-Control-Allow-Origin':'https://localhost:4200',
                // 'Access-Control-Allow-Methods':'POST, GET, PUT, OPTIONS, DELETE',
                // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
               })
             };
          // {
          //      headers: new HttpHeaders({
          //       'Content-Type':  'application/json',
          //       'key':'zKgVhnv#'
          //   })
          // };

          //  {
          //      headers: new HttpHeaders().append('key','zKgVhnv#')
          // };
          console.log(httpOptions);
          console.log(this.http);
          return this.http.get(this.url+'/'+couponCode,httpOptions).pipe(
               catchError(this.handleError)
          );
          // .subscribe((res: any)=>{
          //      result=res;
          // });

          // .pipe(
          //   tap((res: any) => {
          //     result=res;
          //     }
          //   ));
          // .subscribe((res: any)=>{
          //      result=res;
          // });
          // return result;
      }

      private getMenuRoleReq(){
        var finalHeaders = _.assign(
            { 'Content-Type': 'application/json' },
           {
           },
           {'key':'zKgVhnv#'}
         );
        var options: any = { headers:finalHeaders}; 
        return options;
     }

     private handleError(error: HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return throwError(
            'Something bad happened; please try again later.');
        };
}