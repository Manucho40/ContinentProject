import {Injectable} from "@angular/core"
import { ContinentTypes } from "./continentType";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
/**
 * Ce fichier centralise tous les appels API à travers divers méthodes
 */
@Injectable({
    providedIn: 'root'
})
export class ContinentService{
    constructor(private http: HttpClient){}
    // La méthode getAllContinent permet d'obtenir toutes l'intégralité des informations contenues dans notre API
    getAllContinent():Observable<ContinentTypes[]> {
        return this.http.get<ContinentTypes[]>("http://localhost:3000/continents");
      }


    // La méthode searchContinent permet de faire une recherche dans notre API en fonction d'un paramètre passé.
    searchContinent(name: string): Observable<ContinentTypes[]>{
        return this.http.get<ContinentTypes[]>(`http://localhost:3000/continents?name=${name}`);
    }
}