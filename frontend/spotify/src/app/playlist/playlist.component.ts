import { Component, OnInit } from '@angular/core';
import { Music } from '../model/musics';
import { UsuarioService } from '../services/usuario.service';
import { CardMusicComponent } from '../shared/card-music/card-music.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CardMusicComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent implements OnInit {
  music = new Array<Music>();
  user:any = undefined;
  constructor(private userService:UsuarioService) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage["user_autenticated"]);

    this.userService.obter(this.user.id).subscribe(response => {
      for (const lista of response.listaDesejo) {
        this.music.push(...(lista as any).musicas);
        console.log(this.music);
      }
    }); 


  }
  
  
  
  
}
