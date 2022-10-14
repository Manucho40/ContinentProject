import * as mongoose from "mongoose"

export const ContinentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},

});




export class CreateContinentDto {
    readonly id: number;
    readonly name: string;
    readonly code: string;
}