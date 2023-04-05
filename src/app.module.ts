import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IbgeService } from './ibge/ibge.service';
import { IbgeController } from './ibge/ibge.controller';

@Module({
  imports: [],
  controllers: [AppController, IbgeController],
  providers: [AppService, IbgeService],
})
export class AppModule {}
