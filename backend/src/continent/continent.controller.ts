import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';

/**
 * Notre controleur continentControleur se charge de traiter toutes les requêtes et les reponses de notre API
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

// La fonction findContinent est un fonction qui va nous permettre d'obtenir les informations d'un continent en ayant passer son identifiant en paramètre.
    @Get(':id')
    findContinent(@Param("id") id:number){
        return this.continentServices.findOne(id);
    }

// La fonction createContinent nous servira à la création de continent
   async createContinent(@Body() newContinent: CreateContinentDto){
        this.continentServices.create(newContinent);
        return newContinent
        
    }
}


