import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent implements OnInit {
  @Input() playerScore: number[] = [1, 2, 3, 4, 5, 6];
  @Input() opponentPlayerScore: number[] = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit() {}

  sumArray(arr: number[]) {
    return arr.reduce((total, current) => total + current, 0);
  }
}
