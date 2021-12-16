import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HeroDocument, HeroModel } from './hero.model';

@Injectable()
export class HeroService {

    constructor(@InjectModel('Hero') private readonly heroModel: Model<HeroDocument>){}

    async getHero(heroId: string): Promise<HeroModel[]>{
        const dbResult = await this.heroModel.find({_id: heroId});
        return dbResult;
    }

    async getHeroes(): Promise<HeroModel[]>{
        const dbResult = await this.heroModel.find({});
        return dbResult;
    }

}
