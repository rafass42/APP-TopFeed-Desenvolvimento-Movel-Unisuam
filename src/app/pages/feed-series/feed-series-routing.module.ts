import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedSeriesPage } from './feed-series.page';

const routes: Routes = [
  {
    path: '',
    component: FeedSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedSeriesPageRoutingModule {}
