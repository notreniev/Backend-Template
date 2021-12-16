import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.MONGODB_URI
      }),
      inject: [ConfigService],
    }),
    HeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor(){
    console.log('uri', process.env.MONGODB_URI)
  }
}
