import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './continent/continent.component';
import { ContinentModule } from './continent/continent.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContinentModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
