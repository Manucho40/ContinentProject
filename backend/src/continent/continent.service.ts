import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/Create-continent.dto';
import { Continent } from './interfaces/continent.interfaces';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';
@Injectable()
export class ContinentService {
    // continent: Continent[] = [];

    constructor(@InjectModel("Continent") private readonly continentModel: Model<Continent>){}

    
  async findAll(): Promise <Continent[]>{
        return this.continentModel.find().exec();
    }

   async create(continent: CreateContinentDto){
        const createdContinent = new this.continentModel(continent);
        return createdContinent.save();
    }
}
