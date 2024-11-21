import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {

    if(!this.divMapa) throw ('El divMapa no esta definido');

    console.log(this.divMapa);
    const map = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }

  ngOnInit() {
  }

}
