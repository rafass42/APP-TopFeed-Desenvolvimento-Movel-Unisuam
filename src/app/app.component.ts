import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Registro', url: '/inserir', icon: 'clipboard' },
    { title: 'Top Filmes', url: '/feed', icon: 'ribbon' },
    { title: 'Top Series', url: '/feed-series', icon: 'ribbon'},
    { title: 'No Cinema', url: '/feed-cinema', icon: 'easel' },
    { title: 'Creditos', url: '/creditos', icon: 'person' }
  ];
 
  constructor() {}
}
