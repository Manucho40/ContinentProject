import { Injectable } from '@nestjs/common';
import { continentWithLangDto, CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';
@Injectable()
export class ContinentService {

    constructor(@InjectModel("Continent") private readonly continentModel: Model<Continent>){}

    async getContinentWithFilter(filterContinent: CreateContinentDto){
            const {name, code, language} = filterContinent;
            console.log(language)
            let continents = await this.findAll()
            if(name){
                continents = continents.filter(continent => continent.name === name)
            }
            if(code){
                continents = continents.filter(continent => continent.code === code)
                
            }
            if(language){
                let contTrans = continents.map(item => item.translation)
                console.log(contTrans)
            }
            return continents;
        }
    // async getContinentWithLang(continentByLang: continentWithLangDto){
    //         const {language} = continentByLang;
    //         console.log(language)
    // }
    async findOne(id: number){
        let continents = await this.findAll()
            continents = continents.filter(continent => continent.id === id)
            return continents

    }  
    async findAll(): Promise <Continent[]>{
        return this.continentModel.find().exec();
    }

    async create(continent: CreateContinentDto){
         const createdContinent = new this.continentModel(continent);
        return createdContinent.save();
    }
}
