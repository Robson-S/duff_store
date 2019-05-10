import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddCervejaPage } from './add-cerveja.page';
var routes = [
    {
        path: '',
        component: AddCervejaPage
    }
];
var AddCervejaPageModule = /** @class */ (function () {
    function AddCervejaPageModule() {
    }
    AddCervejaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddCervejaPage]
        })
    ], AddCervejaPageModule);
    return AddCervejaPageModule;
}());
export { AddCervejaPageModule };
//# sourceMappingURL=add-cerveja.module.js.map