import {  Component,  OnInit} from '@angular/core';
import {  Cursos} from 'src/app/model/cursos';
import { cursos} from 'src/app/data/cursos';

import * as AOS from 'aos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];

  constructor() {}


  ngOnInit(): void {
    this.cursos = this.getCursos();

    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  getCursos(): Cursos[] {
    return cursos;
  }
  


  

  
}
