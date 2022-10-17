import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { continentWithLangDto, CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';

/**
 * Notre ontroleur continentControleur se charge de traiter toutes les requêtes et les reponses de notre API
 *Il est contitué de trois requêtes qui se chargent chacun de tâches bien spécifique vis à vis de notre API
 * 
 */

//Le decorateur Controleur accepte en paramètre un préfixe de chemin de route
@Controller('continents')
export class ContinentController {
    constructor(private readonly continentServices: ContinentService){}
    // La fonction getContinents se charge de soit renvoyer l'integralité des continents, ou soit de renvoyer les informations d'un continent selon le nom ou le code quis era contenu dans la requête
    @Get()
    getContinents(@Query() filterCont: CreateContinentDto){   
        if(Object.keys(filterCont).length){
            return this.continentServices.getContinentWithFilter(filterCont)
        }else{
            return this.continentServices.findAll();
        }

    }

    @Get(':id')
    findContinent(@Param("id") id:number){
        return this.continentServices.findOne(id);
    }

    // @Get()
    // getDataLang(@Query() lang: continentWithLangDto){
    //     // if(lang){
    //     //     console.log(lang)
    //     // }else{
    //     //     console.log(lang)
    //     // }
    //     console.log("langue")
    // }

    @Post()
   async createContinent(@Body() newContinent: CreateContinentDto){
        this.continentServices.create(newContinent);
        return newContinent
        
    }
}


