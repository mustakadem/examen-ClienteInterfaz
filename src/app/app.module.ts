import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { BotonDirective } from './boton.directive';


@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    BotonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
