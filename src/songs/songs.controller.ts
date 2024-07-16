import { Post ,Get,  Body, HttpException } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createsongDTO } from './dto/createsongs.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songservice:SongsService){}

@Post()
 create(@Body() song:createsongDTO){
    try {
         this.songservice.create(song)
         return song
    } catch (error) {
        throw new HttpException(error,401)
    }
 }
 // get all songs 

   @Get()
   findAll(){
    return this.songservice.findAll()
   }




}
