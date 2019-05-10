import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.cervejas = [];
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.ionViewDidEnter = function () {
        this.cervejas = [];
        var chavesDisponiveis = sessionStorage.getItem('chaves');
        if (chavesDisponiveis !== null) {
            var chavesSeparadas = chavesDisponiveis.split(';');
            for (var i = 0; i < chavesSeparadas.length; i++) {
                var cerveja = sessionStorage.getItem(chavesSeparadas[i]);
                var cervejasObj = JSON.parse(cerveja);
                this.cervejas.push(cervejasObj);
            }
        }
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map