import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LagerPage } from './lager.page';
var routes = [
    {
        path: '',
        component: LagerPage
    }
];
var LagerPageModule = /** @class */ (function () {
    function LagerPageModule() {
    }
    LagerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LagerPage]
        })
    ], LagerPageModule);
    return LagerPageModule;
}());
export { LagerPageModule };
//# sourceMappingURL=lager.module.js.map