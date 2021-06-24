import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedCinemaPage } from './feed-cinema.page';

const routes: Routes = [
  {
    path: '',
    component: FeedCinemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedCinemaPageRoutingModule {}
