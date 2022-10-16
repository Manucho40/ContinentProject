import {Injectable} from "@angular/core"
import { Continent } from "./continent";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
/**
 * Ce fichier centralise tous les appels API à travers divers méthodes
 */
@Injectable({
    providedIn: 'root'
})
export class ContinentService{
    constructor(private http: HttpClient){}
    // La méthode getAllContinent permet d'obtenir toutes les informations  sur les continents
    getAllContinent():Observable<Continent[]> {
        return this.http.get<Continent[]>("http://localhost:3000/continents");
      }

    searchContinent(name: string): Observable<Continent>{
        return this.http.get<Continent>(`http://localhost:3000/continents?name=${name}`);
    }
}