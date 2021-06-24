import { IonicModule, LoadingController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FeedSeriesPage } from './feed-series.page';
import { FeedSeriesPageRoutingModule } from './feed-series-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedSeriesPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [FeedSeriesPage]
})
export class FeedSeriesPageModule {}
