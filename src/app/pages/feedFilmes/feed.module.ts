import { IonicModule, LoadingController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FeedPage } from './feed.page';
import { FeedPageRoutingModule } from './feed-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
