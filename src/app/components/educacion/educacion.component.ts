import {  Component,  OnInit} from '@angular/core';
import {  Educacion} from 'src/app/model/educacion';
import { educacion } from 'src/app/data/educacion';

import * as AOS from 'aos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor() {}


  ngOnInit(): void {
    this.educacion = this.getEducacion();
    
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  getEducacion(): Educacion[] {
    return educacion;
  }
  

}
