import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middlewarelogger-middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
     consumer.apply(LoggerMiddleware)
     .forRoutes("songs")
  }  


  // methid two
//   configure(consumer:MiddlewareConsumer){
//     consumer.apply(LoggerMiddleware)
//     .forRoutes({path:"songs" ,  method:RequestMethod.POST})
//  }


// method three

// configure(consumer:MiddlewareConsumer){
//   consumer.apply(LoggerMiddleware)
//   .forRoutes(SongsController);
// }



}
