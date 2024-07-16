import { Injectable } from '@nestjs/common';
import { createsongDTO } from './dto/createsongs.dto';

@Injectable()
export class SongsService {
    private songs:createsongDTO[] =[];

    create(song:createsongDTO){
       return this.songs.push(song)
    }

    findAll():any{
      return this.songs
    }
}
