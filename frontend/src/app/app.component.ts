import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContinentService } from './api.service';
import { Continent } from './continent';
import { CONTINENT } from './mock-continent-list';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ContinentService]
})
export class AppComponent implements OnInit{
  continentList: Continent[];
  continentSearch: Continent[];
  continentSelected: Continent | undefined ;
  errorMessage: string;
  loading: boolean;
  searchText: string;
  constructor(private continentService: ContinentService){}

  ngOnInit(){
    this.getContinents();

  }

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
