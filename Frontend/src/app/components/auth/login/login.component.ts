import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/TipoUsuarioService';
import { TipoUsuario } from 'src/app/entity/TipoUsuario';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  tipoUsuario: TipoUsuario= new TipoUsuario();
  constructor(private router:Router, private service:TipoUsuarioService) { }
 
  ngOnInit(): void {
  }

  Login(){
    this.service.loginAut(this.tipoUsuario).pipe(catchError(this.service.credencialesInvalidas)).subscribe(data =>{
      console.log(data)
      this.router.navigate(["/admin"])
    })
    console.log(this.tipoUsuario.correo_emp)
    console.log(this.tipoUsuario.contrasena_emp)
  }

}
