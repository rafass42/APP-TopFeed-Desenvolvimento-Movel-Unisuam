import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedCinemaPageRoutingModule } from './feed-cinema-routing.module';

import { FeedCinemaPage } from './feed-cinema.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedCinemaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FeedCinemaPage]
})
export class FeedCinemaPageModule {}
