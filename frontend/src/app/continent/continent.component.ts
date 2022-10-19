import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContinentService } from './continent.service';
import { ContinentTypes } from './continentType';
@Component({
  selector: 'app-root',
  templateUrl: 'continent.component.html',
  providers: [ContinentService]
})
export class AppComponent implements OnInit{
  /**
   * Ce composant contiendra l'essentiel de la logique de notre application.
   */
  // c'est dans la propiété continentList que nous stockons les datas que nous recevons de notre API 
  continentList: ContinentTypes[];

  // la propiété continentSearch nous servira à stocker les datas qui correspondront à une recherche 
  continentSearch: ContinentTypes[];

  // la propiété erroMessage stock un message d'erreur en cas d'echec lors de l'appel à nos datas
  errorMessage: string;

  // la propriété loading quand à elle nous donne le statut de notre appel à l'API
  loading: boolean;

  // la searchText receptionnera le text que l'utilisateur saisira dans le champs de recherche
  searchText: string;


  constructor(private continentService: ContinentService){}

  ngOnInit(){
    this.getContinents();

  }

  // La fonction getContinents tente de récuperer l'ensemble de nos données à l'initialisation de notre composant.
  public getContinents() {
    this.loading = true;
    this.errorMessage = "";
    this.continentService.getAllContinent()
      .subscribe(
        (response) => {                          
          console.log('response received')
          this.continentList = response; 
        },
        (error) => {                              
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   
          console.error('Request completed')      
          this.loading = false; 
        })
  }
  
  // La value fonction gère elle notre recherche API. Elle reception la valeur saisi par l'utilisateur et retour des objets selon si la valeur corresponds à un continent dans nos datas.
  public valuEnter(value: string){
    this.continentService.searchContinent(value.toLocaleUpperCase())
          .subscribe(
            (response) =>{
              this.continentSearch = response
              return this.continentSearch[0]
            }
          )
  }

  
  
  
  


}
