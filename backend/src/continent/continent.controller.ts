import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';

//Permet d'ecouter localhost:3000/continent
@Controller('continents')
export class ContinentController {
    constructor(private readonly continentServices: ContinentService){}
    @Get()
   async findAll(): Promise<Continent[]>{
        return this.continentServices.findAll();
    }


    @Post()
   async createContinent(@Body() newContinent: CreateContinentDto){
        console.log(newContinent)
        this.continentServices.create(newContinent);
        return newContinent
        
    }
}


