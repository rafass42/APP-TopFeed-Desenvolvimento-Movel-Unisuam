import { Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MoviesService } from '../theMovieDB/movies.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed-cinema',
  templateUrl: 'feed-cinema.page.html',
  styleUrls: ['feed-cinema.page.scss'],
  providers: [MoviesService]
})
export class FeedCinemaPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public page:number;

  public lista_cinema = new Array<any>();
  
    constructor(
      public router: Router,
      public movieService:MoviesService, 
      public loadingController: LoadingController) {

      this.page=1;
    }
    
    
    ionViewDidEnter(){
      this.efeitoCarregandoPagina();
      this.carregarPagina();
      
    }

    public carregarPagina(){
      this.movieService.getPopularCinema(this.page,"pt").subscribe(
        data => {
          const resultado = data as any;

          if(this.page==1){
            this.lista_cinema = resultado.results;

          }else{
            this.lista_cinema = this.lista_cinema.concat(resultado.results);
          }
          this.lista_cinema = this.lista_cinema.concat(resultado.results);
          console.log(this.lista_cinema);
        },

        error =>{
          console.log(error);

        }
      )
    }

    async efeitoCarregandoPagina() {
      const loading = await this.loadingController.create({
        spinner: 'circles',
        duration: 1500,
        message: 'Carregando Feed ...',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
    }


    doRefresh(event) {
      this.page= 1;
      this.carregarPagina();
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);

  }

  efeitoInfScroll(event) {
    this.page++;
    this.carregarPagina();
    setTimeout(() => {
      event.target.complete();     
       }, 1000);
  }
  logout(){
    this.router.navigate(['login']);
}
  
}

