import * as mongoose from "mongoose"
// On défini le schema de notre collectiion dans la ma base de donnée (MongoBD)
export const ContinentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},

});



// Nous définissons là le schéma DTO(Data Transfert Object) qui défini comment les données seront envoyé sur le réseaux
export class CreateContinentDto {
    readonly id: number;
    readonly name: string;
    readonly code: string;
}