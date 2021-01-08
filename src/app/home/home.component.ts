import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: any[] = [
    { desc: 'Rysen 5', price: 1000 },
    { desc: 'Rysen 5', price: 2000 },
    { desc: 'Rysen 7', price: 3000 },
    { desc: 'Rysen 7', price: 4000 },
    { desc: 'Intel i3', price: 5000 },
    { desc: 'Intel i3', price: 6000 },
    { desc: 'Intel i5', price: 7000 },
    { desc: 'Intel i5', price: 8000 },
    { desc: 'Intel i7', price: 9000 },
    { desc: 'Intel i7', price: 10000 }
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
    //{ name: 'Lectoras', id: 10 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
