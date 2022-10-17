
export interface Continent {
    id: number;
    langage: string
    name: string;
    code: string;
    flag: string;
    translation:
    [
       {
          language: {type: String},
          name: {type: String},
          code: {type: String},      
       },
       {
            language: {type: String},
            name: {type: String},
            code: {type: String},      
        }
   ]
}