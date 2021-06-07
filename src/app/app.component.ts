import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personaArray:Persona[]=[
    {id:1,name:"tonci",country:"BOLIVIA"},
    {id:2,name:"yamile",country:"USA"},
    {id:3,name:"matias",country:"HAITI"},
    {id:4,name:"victoria",country:"PERU"},
  ];
    selectedPersona:Persona= new Persona();

    agregar(){
      if(this.selectedPersona.id ===0){
        this.selectedPersona.id=this.personaArray.length +1;
        this.personaArray.push(this.selectedPersona);
    
        
      }
      this.selectedPersona=new Persona();
  }
  editar(person:Persona){
    this.selectedPersona=person;
  }
  eliminar(){
    if (confirm('Seguro que quieres eliminarlo')) {
      this.personaArray = this.personaArray.filter(x => x !=this.selectedPersona);
      this.selectedPersona=new Persona();
    }
  }
}
