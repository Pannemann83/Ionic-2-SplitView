import {Component} from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    public isTablet: boolean;
    public items: any;
    public selectedItem: any;

    constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams) {
        //sample items to display a sample list
        this.items = [
            {
                name: 'Test'
            },
            {
                name: 'Hallo'
            }];

        //check, if platform is ready to determin if running on a tablet
        this.platform.ready().then(() => {
            this.isTablet = (<any>window).isTablet;

            //just for testing if plugin isTablet is not available
            //switch between true and false to see result on tablet or on phone
            if (typeof (this.isTablet) === 'undefined') {
                this.isTablet = true;
            }

            //if on tablet set first item in main content so it is not empty on start
            if (this.isTablet) {
                if (typeof (this.selectedItem) === 'undefined') {
                    this.selectedItem = this.items[0];
                }
            }
        });
    }

    itemTapped(event, item) {
        if (this.isTablet) {
            //if tablet => show selected item in main content area
            this.selectedItem = item;
        } else {
            //else => navigate to detail page
            this.navCtrl.push(DetailPage, { item: item });
        }
    }
}
