import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('map') divMapa?: ElementRef;

  public zoom: number = 10;
  public map?:Map;
  public currentCenter: LngLat = new LngLat(-74.5,40);

  constructor() { }
  ngOnDestroy(): void {
    this.map?.remove(); //limpieza listeners y eventos
  }
  ngAfterViewInit(): void {

    if(!this.divMapa) throw ('El divMapa no esta definido');

    console.log(this.divMapa);
    this.map = new Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentCenter,
      zoom: this.zoom,
    });
    this.mapListener()
  }

  mapListener(){
    if(!this.map) throw ('El mapa no esta definido');

    this.map.on('zoom', (ev)=>{
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev)=>{
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', ()=>{
      this.currentCenter = this.map!.getCenter();
      console.log(this.currentCenter);
      const {lng, lat} = this.currentCenter;

    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }
  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChange(value: string){
    this.zoom = Number(value);
    this.map!.zoomTo(this.zoom);
  }



}
