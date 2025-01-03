import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'alone-page',
  standalone: true,
  imports: [ CounterAloneComponent, SideMenuComponent],
  templateUrl:'./alone-page.component.html',
  styleUrl: './alone-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent { }
