import {  Component,  OnInit} from '@angular/core';
import {  Proyectos} from 'src/app/model/proyectos';
import { proyecto } from 'src/app/data/proyecto';
import * as AOS from 'aos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor() {}

 

  getProyectos(): Proyectos[] {
    return proyecto;
  }
  

  ngOnInit(): void {
    this.proyectos = this.getProyectos();
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


  
}
