import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListaUsuario } from 'src/app/entity/ListaUsuario';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
<<<<<<< HEAD
=======
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  listausuario: ListaUsuario = new ListaUsuario();
  constructor(private service:ListaUsiarioService) { 
  }
>>>>>>> john-Romo

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.service.loginAut().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    })  
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

  actualizar(empleado: any){
    this.service.actualizar(empleado.id_emp, empleado).subscribe(
      data => {
        alert("Usuario desbloqueado")
        window.location.reload();
      })

>>>>>>> john-Romo
  }

  registrarUsuario2(empleado: any) {

    this.service.eliminar(empleado.id_emp, empleado);
    this.service.registrarUsuario2(empleado.id_emp, empleado).subscribe(
      data => {
        alert("Usuario desbloqueado")
        window.location.reload();
    
      })

    }

}
