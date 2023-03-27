import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  customerId =  "";
  param$! :  Subscription;
  queryParams$! :  Subscription;

  fids! : string[];

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      console.log("load ... customer");
      this.param$ = this.activatedRoute.params.subscribe(
        (params) => {
          this.customerId = params['custId'];
          console.log(this.customerId);
        }
      );

      this.queryParams$ = this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          this.fids = queryParams['fids'].split('|');
        });
  }

  ngOnDestroy(): void {
    console.log("destroy ... customer");
    this.param$.unsubscribe();
    this.queryParams$.unsubscribe();
  }
}
