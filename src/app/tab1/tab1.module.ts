import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CountdownComponent } from '../countdown/countdown.component';
import { RunCountdownComponent } from '../run-countdown/run-countdown.component';
import { ScoreBoardComponent } from '../score-board/score-board.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, CountdownComponent, RunCountdownComponent, ScoreBoardComponent]
})
export class Tab1PageModule {}
