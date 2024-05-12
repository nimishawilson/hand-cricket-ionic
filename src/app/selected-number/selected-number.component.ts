import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-number',
  templateUrl: './selected-number.component.html',
  styleUrls: ['./selected-number.component.scss'],
})
export class SelectedNumberComponent  implements OnInit {
  @Input() mySelectedNumber: number = 0;
  @Input() virtualPlayerScaledNumber: number = 0;

  constructor() { }

  ngOnInit() {}

}
