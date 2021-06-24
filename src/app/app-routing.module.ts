import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  
  
  {
    path: 'feed',
    loadChildren: () => import('./pages/feedFilmes/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'feed-series',
    loadChildren: () => import('./pages/feed-series/feed-series.module').then( m => m.FeedSeriesPageModule)
  },

  {
    path: 'feed-cinema',
    loadChildren: () => import('./pages/feed-cinema/feed-cinema.module').then( m => m.FeedCinemaPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./usu/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./usu/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
