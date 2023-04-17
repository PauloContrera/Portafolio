import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/model/acercade';
import { acerca} from 'src/app/data/acercade';
import * as AOS from 'aos';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  acercade: Acercade[] = [];


  constructor() { }

  ngOnInit(): void {
    
    this.acercade = this.getAcerca();
    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  getAcerca(): Acercade[] {
    return acerca;
  }

}
