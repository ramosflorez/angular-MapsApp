import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken ='pk.eyJ1IjoidmFsZXJpYS0xOCIsImEiOiJjbTNxM3h2cHkwbGdtMmtxM3VsMjk5cXk0In0.FDt3sJDHmSP_YLsaIGPl2A';


@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,

  ],
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ]
})
export class MapsModule { }
