import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var CervejaDetalhesPage = /** @class */ (function () {
    function CervejaDetalhesPage(route) {
        this.route = route;
        console.log("EXECUTOU O CONSTRUTOR");
    }
    CervejaDetalhesPage.prototype.ngOnInit = function () {
        var idcerveja = this.route.snapshot.params.id;
        if (idcerveja === '50') {
            this.nome = 'Proibida';
            this.detalhes = 'Tão gostoza que é proibida. A melhor cerveja do Ceara';
        }
        else if (idcerveja === '60') {
            this.nome = 'skol';
            this.detalhes = 'A puro malte que desce redondo.';
        }
    };
    CervejaDetalhesPage = tslib_1.__decorate([
        Component({
            selector: 'app-cerveja-detalhes',
            templateUrl: './cerveja-detalhes.page.html',
            styleUrls: ['./cerveja-detalhes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], CervejaDetalhesPage);
    return CervejaDetalhesPage;
}());
export { CervejaDetalhesPage };
//# sourceMappingURL=cerveja-detalhes.page.js.map