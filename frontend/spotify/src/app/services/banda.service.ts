import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from '../model/banda';
import { environment } from '../environments/environment';
import { Music } from '../model/musics';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private url = `${environment.apiUrlBase}/banda`;

  constructor(private http: HttpClient) { }

  public obterBandas() : Observable<Array<Banda>> {
      let options = {
        headers: environment.headers
      };
      return this.http.get<Array<Banda>>(`${this.url}`, options);
  }

  public obterMusicBanda(id:String) : Observable<Array<Music>> {
    let options = {
      headers: environment.headers
    };
    return this.http.get<Array<Music>>(`${this.url}/${id}/music`, options);
  }

  public criarMusic(request:any, id:String = "89c4a77d-5d41-4c0b-9826-0941e3f68e3e") {
    let options = {
      headers: environment.headers
    };
  
    return this.http.post<Banda>(`${this.url}/${id}/music`, request, options);
  }

  public autocomplete(searchText: String): Observable<any> {
    let options = {
      headers: environment.headers
    };
    return this.http.get(`${this.url}/autocomplete?search=${searchText}`, options);
    
  }
}
