import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private chave:string = "64db3e5798c3f143729df887c1637b1d";
  private caminhoPadrao:string = "https://api.themoviedb.org/3";
  constructor(public http:HttpClient) { }

  getPopularMovies(pagina=1,language="eng"){ 

    //https://api.themoviedb.org/3/movie/popular?api_key=64db3e5798c3f143729df887c1637b1d&language=en-US&page=1
    let filmes = `${this.caminhoPadrao}/movie/top_rated?page=${pagina}&language=${language}&api_key=${this.chave}`;
    return this.http.get(filmes);
    
  }
  getPopularSeries(pagina=1,language="eng"){
    let series = `${this.caminhoPadrao}/tv/top_rated?page=${pagina}&language=${language}&api_key=${this.chave}`;
    return this.http.get(series);
  }
  
  getPopularCinema(pagina=1,language="eng"){
    let cinema = `${this.caminhoPadrao}/movie/now_playing?page=${pagina}&language=${language}&api_key=${this.chave}`;
    return this.http.get(cinema);
  }
}
