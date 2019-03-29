import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor(private route:ActivatedRoute) { 
    console.log("EXECUTOU O CONSTRUTOR")
  }

  ngOnInit() {
    let idcerveja = this.route.snapshot.params.id;

  if(idcerveja === '50') {
    this.nome ='Proibida'    
    this.detalhes = 'Tão gostoza que é proibida. A melhor cerveja do Ceara'

   } else if(idcerveja === '60') {
    this.nome = 'skol'
    this.detalhes = 'A puro malte que desce redondo.'
   }
  }
}
