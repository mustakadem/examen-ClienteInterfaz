import { Component, OnInit } from '@angular/core';
import {Idea, IDEAS} from '../idea';


@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent {

  ideas = IDEAS;
  mostrarDiv = false;
  toogleDiv() {
    this.mostrarDiv = !this.mostrarDiv;
  }

}
