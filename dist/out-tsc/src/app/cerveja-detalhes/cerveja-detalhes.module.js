import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CervejaDetalhesPage } from './cerveja-detalhes.page';
var routes = [
    {
        path: '',
        component: CervejaDetalhesPage
    }
];
var CervejaDetalhesPageModule = /** @class */ (function () {
    function CervejaDetalhesPageModule() {
    }
    CervejaDetalhesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CervejaDetalhesPage]
        })
    ], CervejaDetalhesPageModule);
    return CervejaDetalhesPageModule;
}());
export { CervejaDetalhesPageModule };
//# sourceMappingURL=cerveja-detalhes.module.js.map