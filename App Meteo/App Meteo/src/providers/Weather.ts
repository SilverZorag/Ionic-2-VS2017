﻿import { Injectable } from '@angular/core';
import { Http  ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class Weather {




    constructor(public http: Http) {
        console.log('Hello Weather Provider');
    }

}
