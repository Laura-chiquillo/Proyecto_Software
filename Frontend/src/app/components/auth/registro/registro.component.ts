import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/TipoUsuarioService';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {
  public registroForm: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private router:Router, private service:TipoUsuarioService) {
    this.registroForm = this.createForm();
   }
   get nombre() {return this.registroForm.get('nombre');}
   get apellido() {return this.registroForm.get('apellido');}
   get telefono() {return this.registroForm.get('telefono');}
   get email() {return this.registroForm.get('email');}
   get contrasena() {return this.registroForm.get('contrasena');}
   get confContrasena() {return this.registroForm.get('confContrasena');}
   get tDocumento() {return this.registroForm.get('tDocumento');}
   get nDocumento() {return this.registroForm.get('nDocumento');}
   get tUsuario() {return this.registroForm.get('tUsuario');}
   get funcionalidad() {return this.registroForm.get('funcionalidad');}
   get sexo() {return this.registroForm.get('sexo');}

  createForm(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.emailPattern)]),
      apellido: new FormControl('',[Validators.required, Validators.minLength(5)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[- +()0-9]+')]),
      contrasena: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
      confContrasena: new FormControl('',[Validators.required,Validators.minLength(8)]),
      tDocumento: new FormControl('',[Validators.required]),
      nDocumento: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[- +()0-9]+')]),
      funcionalidad: new FormControl('',[Validators.required]),
      sexo: new FormControl('',[Validators.required])
    })
  }
  onResetForm(): void{
    this.registroForm.reset();
  }

  onSaveForm():void {
    
  }
  
}
