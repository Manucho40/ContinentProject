import * as mongoose from "mongoose"
// On défini le schema de notre collectiion dans la ma base de donnée (MongoBD)
export const ContinentSchema = new mongoose.Schema({
    language: {type: String, required: true},
    name: {type: String, required: true},
    code: {type: String, required: true},
    flag:  {type: String, required: true},
    translation:
    {
      FRENCH:{
          name: {type: String, required: true},
          code: {type: String, required: true},      
       },
      SPANISH:{
          name: {type: String, required: true},
          code: {type: String, required: true},
        }
   }

});



// Nous définissons là le schéma DTO(Data Transfert Object) qui défini comment les données seront envoyé sur le réseaux
export class CreateContinentDto {
    readonly id: number;
    readonly language: string
    readonly name: string;
    readonly code: string;
    readonly flag: string;
    readonly translation:{
      FRENCH:{
         name: {type: String, required: true},
         code: {type: String, required: true},      
      },
      SPANISH:{
            name: {type: String},
            code: {type: String},      
        }
      }
};
