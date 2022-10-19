import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';
/**
 * C'est dans ce fichier que sera traité notre logique a travers des fonction. Cee sont ces focntions qui seront ensuite fournis a notre contrôleur..
 */
@Injectable()
export class ContinentService {

    constructor(@InjectModel("Continent") private readonly continentModel: Model<Continent>){}


//La fonction getContinentWithFilter se charge de configuré la route avec paramètre. Elle renvera une reponse selon le paramètre qui sera passer dans la route.
    async getContinentWithFilter(filterContinent: CreateContinentDto){
            const {name, code} = filterContinent;
            let continents:any = await this.findAll()
            if(name){
                continents = continents.filter(continent => continent.name.includes(name))
            }
            if(code){
                continents = continents.filter(continent => continent.code.includes(code))
            }
            return continents;
        }

//La fonction findOne accepte un identifiant en parametre. Ensuite elle boucle sur l'ensemble de nos continent et renvoie le continent correspondant à l'identifiant.
    async findOne(id: number){
        let continents = await this.findAll()
            continents = continents.filter(continent => continent.id === id)
            return continents

    }
    
//La fonction findAll nous renvoie l'ensemble de nos continents contenu dans notre base de donnée.
    async findAll(): Promise <Continent[]>{
        return this.continentModel.find().exec();
    }

//La fonction create gere l'ajout de nouveau continent
    async create(continent: CreateContinentDto){
         const createdContinent = new this.continentModel(continent);
        return createdContinent.save();
    }
}
