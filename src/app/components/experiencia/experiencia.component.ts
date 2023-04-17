import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { EXPERIENCIAS } from 'src/app/data/experiencias';
import * as AOS from 'aos';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor() {}

  getExperiencias(): Experiencia[] {
    return EXPERIENCIAS;
  }
  

  ngOnInit(): void {
    this.experiencia = this.getExperiencias();
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }


  

  
}
