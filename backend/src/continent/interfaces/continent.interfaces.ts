
export interface Continent {
    id: number;
    langage: string
    name: string;
    code: string;
    flag: string;
    translation:
    {
       FREANCH:{
          name: {type: String},
          code: {type: String},      
       },
       FRENCH:{
            name: {type: String},
            code: {type: String},      
        }
   }
}