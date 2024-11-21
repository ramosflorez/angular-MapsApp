import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';


interface MarkerColor{
  color:string;
  marker:Marker;
}

interface PlainMarker{
  color:string;
  lngLat:number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('map') divMapa?: ElementRef;

  public zoom: number = 13;
  public map?:Map;
  public currentCenter: LngLat = new LngLat(-74.5,40);
  public markers: MarkerColor[] = [];

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
    this.readFromLocalStorage();

    // const markerHtml: HTMLElement = document.createElement('div');

    // const marker = new Marker(
    //   {color:'#FF7738', draggable:true}
    // )
    // .setLngLat(this.currentCenter)
    // .addTo(this.map);
  }

  createMarker(){
    if(!this .map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)); //genera un color aleatorio en hexadecimal
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat:LngLat, color:string){
    if(!this.map) throw ('El mapa no esta definido');
    const marker = new Marker(
      {color:color, draggable:true}
    ).setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({color, marker});
    this.saveToLocalStorage();

    //dragend
    marker.on('dragend', ()=>{
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index,1);
    localStorage.removeItem('markers');
    this.saveToLocalStorage();
  }

  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map(({color, marker})=>{
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    } );
    localStorage.setItem('markers', JSON.stringify(plainMarkers));

    console.log(plainMarkers);
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('markers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);//! Potencialmente inseguro
    plainMarkers.forEach(marker=>{
      const {color, lngLat} = marker;
      this.addMarker(new LngLat(lngLat[0], lngLat[1]), color);
    });
    console.log(plainMarkers);
  }

}
