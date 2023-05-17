import { Produtos } from '../produtos';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor (private ProdutosService: ProdutosService){}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.ProdutosService.getProdutos().subscribe(
        {
      next : data => this.produtos = data
        }
    );
  }

}
