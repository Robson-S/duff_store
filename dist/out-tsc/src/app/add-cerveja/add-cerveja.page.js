import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var AddCervejaPage = /** @class */ (function () {
    function AddCervejaPage(location) {
        this.location = location;
    }
    AddCervejaPage.prototype.ngOnInit = function () {
        this.mensagem = "";
    };
    AddCervejaPage.prototype.salvar = function (form) {
        var cervejaString = JSON.stringify(form.value);
        var nomeCerveja = form.value.nome;
        sessionStorage.setItem(nomeCerveja, cervejaString);
        var chavesDisponiveis = sessionStorage.getItem('chaves');
        if (chavesDisponiveis !== null) {
            chavesDisponiveis = chavesDisponiveis + ';' + nomeCerveja;
        }
        else {
            chavesDisponiveis = nomeCerveja;
        }
        sessionStorage.setItem('chaves', chavesDisponiveis);
        form.reset();
        this.mensagem = 'Cadastrado com sucesso!';
        console.log('As chaves disponiveis são: ', chavesDisponiveis);
        this.location.back();
    };
    AddCervejaPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-cerveja',
            templateUrl: './add-cerveja.page.html',
            styleUrls: ['./add-cerveja.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location])
    ], AddCervejaPage);
    return AddCervejaPage;
}());
export { AddCervejaPage };
//# sourceMappingURL=add-cerveja.page.js.map