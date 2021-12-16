import { Controller, Get, Param } from '@nestjs/common';
import { HeroModel } from './hero.model';
import { HeroService } from './hero.service';

@Controller('api/hero')
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Get()
    getHero():Promise<HeroModel[]>{
        return this.heroService.getHeroes();
    }

    @Get('/:id')
    async getHeroById(@Param('id') id: string):Promise<HeroModel[]>{
        return await this.heroService.getHero(id);
    }
}
