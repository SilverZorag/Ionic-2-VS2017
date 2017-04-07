import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-WeatherDetail',
    templateUrl: 'WeatherDetail.html'
})
export class WeatherDetailPage {

    forecast: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //Pull the selected forecast off of navParams
        this.forecast = this.navParams.get('forecast');
}


    ionViewDidLoad() {
        console.log('Weather Detail page loaded');
    }

}
