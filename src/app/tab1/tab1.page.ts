import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  virtualPlayerScaledNumber: number = 0;
  virtualPlayerRuns: number[] = [];
  playerRuns: number[] = [];
  mySelectedNumber: number = 0;
  countdownValue: number = 3;
  startGame: boolean = false;
  startRun: boolean = false;

  constructor() {}

  getRandomNumber() {
    const randomNumber = Math.random();
    this.virtualPlayerScaledNumber = Math.floor(randomNumber * 6) + 1;
  }

  setYourRuns(selectedNumber: number) {
    this.playerRuns.push(selectedNumber);
    this.mySelectedNumber = selectedNumber;
  }

  startCountdown() {
    this.startGame = true;
    this.getRandomNumber();
  }

  startRunCountDown() {

    this.startRun = true;

  }
}
