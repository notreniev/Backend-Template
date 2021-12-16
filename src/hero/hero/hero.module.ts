import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroController } from './hero.controller';
import { HeroModel, HeroSchema } from './hero.model';
import { HeroService } from './hero.service';

@Module({
    imports: [HeroModel,
        MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }])
    ],
    controllers: [HeroController],
    providers: [HeroService]
})
export class HeroModule {}
