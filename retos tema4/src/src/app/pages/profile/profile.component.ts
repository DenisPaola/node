import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user?: User;

  constructor(){
  }


  modificar(nombre: HTMLInputElement, apellido: HTMLInputElement, correo:HTMLInputElement, url: HTMLInputElement){
    
    this.user = new User(0, nombre.value, apellido.value, correo.value, url.value,'');

    console.log(this.user.name);
  }

}
