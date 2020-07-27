import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public products: any[] = [
    { name: 'Rysen 5', id: 1 },
    { name: 'Rysen 5', id: 2 },
    { name: 'Rysen 7', id: 3 },
    { name: 'Rysen 7', id: 4 },
    { name: 'Intel i3', id: 5 },
    { name: 'Intel i3', id: 6 },
    { name: 'Intel i5', id: 7 },
    { name: 'Intel i5', id: 8 },
    { name: 'Intel i7', id: 9 },
    { name: 'Intel i7', id: 10 }
  ];

  public categories: any[] = [
    { name: 'Procesadores', id: 1 },
    { name: 'Motherboards', id: 2 },
    { name: 'Memorias RAM', id: 3 },
    { name: 'Placa de video', id: 4 },
    { name: 'Almacenamiento', id: 5 },
    { name: 'Gabinete', id: 6 },
    { name: 'Fuentes', id: 7 },
    { name: 'Refrigeración', id: 8 },
    { name: 'Conectividad', id: 9 },
    { name: 'Lectoras', id: 10 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}





