import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  constructor( private router:Router, private service:ServiceService ) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data => {
    this.personas = data;
    console.log (this.personas);
    })
  }

  salir(){
    this.router.navigate (['/mis-compras']); 
  }
}
