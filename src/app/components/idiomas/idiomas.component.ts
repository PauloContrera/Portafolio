import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { idiomas} from 'src/app/data/idiomas';

import * as AOS from 'aos';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit {

  
  idioma: Idioma[] = [];

  constructor() { }


  ngOnInit(): void {
    this.idioma = this.getIdiomas();
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  getIdiomas(): Idioma[] {
    return idiomas;
  }

 
}
