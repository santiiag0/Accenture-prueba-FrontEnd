import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  comprar(){
    this.router.navigate (['/factura']); 
  }
}
