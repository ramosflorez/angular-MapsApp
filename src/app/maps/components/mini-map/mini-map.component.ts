import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent  {

  @Input() lngLat?: [number, number] ;
  @ViewChild('map') divMapa?: ElementRef;
  public map?:Map;

  constructor() { }

  ngAfterViewInit(): void {
    if(!this.divMapa?.nativeElement) throw ('El divMapa no esta definido');
    if (!this.lngLat) throw "lngLat is required";

    // mapa
    this.map = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    });

    // marker
    new Marker().setLngLat(this.lngLat).addTo(this.map);


  }



}
