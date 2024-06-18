import { Music } from "./musics";

export interface Banda {
    id:String,
    nome:String;
    carros:Array<Music>
}