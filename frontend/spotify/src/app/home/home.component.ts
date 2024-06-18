import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BandaService } from '../services/banda.service';
import { Banda } from '../model/banda';
import { FilterComponent } from '../shared/filter/filter.component';
import { CardMusicComponent } from '../shared/card-music/card-music.component';
import { Music } from '../model/musics';
import { take } from 'rxjs';
import { MusicModalComponent } from '../shared/music-modal/music-modal.component';
import { SearchComponent } from '../shared/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterComponent, CardMusicComponent, MusicModalComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
   musica = new Array<Music>();

   constructor(private bandaService: BandaService) { }
   
   ngOnInit(): void {
       this.onFilter('ALL');
   }

   public reload() {
      this.onFilter('ALL');
   }

   public filterMusic($event:any) {
     let result = this.musica.filter(x => x.id == $event);
     this.musica = [];
     this.musica = result;
   }

   public onFilter($event: any) {
      let id = $event;
      this.musica = [];
      if (id !== 'ALL') {
         this.bandaService.obterMusicBanda(id).pipe(take(1)).subscribe(response => {
            this.musica = response; 
         });
      } else {
         this.bandaService.obterBandas().pipe(take(1)).subscribe(Bandas => {
            for (const item of Bandas) {
               this.musica.push(...item.carros);
            }
         });
      }

   }
}
