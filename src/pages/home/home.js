var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
export var HomePage = (function () {
    function HomePage(navCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.items = [
            {
                name: 'Test'
            },
            {
                name: 'Hallo'
            }];
        this.platform.ready().then(function () {
            _this.isTablet = window.isTablet;
            if (typeof (_this.isTablet) === 'undefined') {
                _this.isTablet = false;
            }
            if (_this.isTablet) {
                if (typeof (_this.selectedItem) === 'undefined') {
                    _this.selectedItem = _this.items[0];
                }
            }
        });
        if (typeof (this.selectedItem) === 'undefined') {
            this.selectedItem = navParams.get('item');
        }
    }
    HomePage.prototype.itemTapped = function (event, item) {
        if (this.isTablet) {
            //if tablet => show selected item in main content area
            this.selectedItem = item;
        }
        else {
            //else => navigate to detail page
            this.navCtrl.push(DetailPage, { item: item });
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController, Platform, NavParams])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map