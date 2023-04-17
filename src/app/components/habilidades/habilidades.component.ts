import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { skills } from 'src/app/data/habilidades';

import * as AOS from 'aos';
// import Swiper core and required modules
// import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation  } from "swiper";
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

// install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination,Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HabilidadesComponent implements OnInit {

 


  habilidades: Habilidades[] = [];

  constructor() { }


  ngOnInit(): void {
    this.habilidades = this.cargarExperiencia();

    
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  

  cargarExperiencia(): Habilidades[] {
    return skills;
  }

  
}
