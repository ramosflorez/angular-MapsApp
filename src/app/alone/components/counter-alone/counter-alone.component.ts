import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent implements OnInit {

  public counter:number = 10;
  constructor() { }

  ngOnInit() {
  }

}
