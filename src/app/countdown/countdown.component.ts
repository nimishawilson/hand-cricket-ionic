import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent  implements OnInit, OnChanges {
  @Input()start = false;
  @Output() countDownOver = new EventEmitter<void>();
  countdownValue: number = 3;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
     if(this.start==true) {
      console.log('started')
      this.startCountdown();
    }
  }

  startCountdown() {
    let count = 3;
  
    const printCount = () => {
      this.countdownValue = count;
      count--;
  
      if (count >= 0) {
        setTimeout(printCount, 1000);
      }

      if (count === 0) { 
        this.countDownOver.emit();
      }
    };
  
    printCount();
  }

}
