import { Component } from '@angular/core';

type Product = {
  nombre: string;
  costo: number;
  image: string;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  products: Product[] = [
    { nombre: 'Coca Cola', costo: 500, image: '../../assets/images/coca.png' },
    { nombre: 'Pritty', costo: 450, image: '../../assets/images/pritty.png'  },
    { nombre: 'Pepsi', costo: 600, image: '../../assets/images/pepsi.png'   },
    { nombre: 'Quilmes', costo: 700, image: '../../assets/images/quilmes.png'   },
    { nombre: 'Brahma', costo: 600, image: '../../assets/images/brahama.png' }
  ];
  showList = true;

  toggleList() {
    this.showList = !this.showList;
  }
}
