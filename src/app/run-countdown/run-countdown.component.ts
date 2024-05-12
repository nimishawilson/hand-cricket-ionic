import { Component, OnInit , Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-run-countdown',
  templateUrl: './run-countdown.component.html',
  styleUrls: ['./run-countdown.component.scss'],
})
export class RunCountdownComponent  implements OnInit, OnChanges {
  @Input()start = false;
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
    };
  
    printCount();
  }

}
