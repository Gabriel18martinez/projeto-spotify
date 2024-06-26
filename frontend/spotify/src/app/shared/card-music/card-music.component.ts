import { Component, Input } from '@angular/core';
import { Music } from '../../model/musics';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-card-music',
  standalone: true,
  imports: [],
  templateUrl: './card-music.component.html',
  styleUrl: './card-music.component.css'
})
export class CardMusicComponent {
    @Input()
    public music?:Music;

    constructor(private userService: UsuarioService) {}

    public favoritar() {
      var user = JSON.parse(sessionStorage["user_autenticated"]);

      this.userService.favoritar(user.id, this.music?.id as String)
      .subscribe(() => {
        console.log("favoritado com sucesso");
      });

    }
}
