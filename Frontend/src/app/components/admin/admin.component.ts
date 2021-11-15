import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service:ListaUsiarioService) { 
  }

  displayedColumns: string[] = ['id_emp', 'nombres_emp',
  'apellidos_emp', 'num_id_emp', 'correo_emp',
  'sexo_emp', 'telefono_emp', 'id_nivel', 'id_fun', 'estado_emp',
  'contrasena_emp', 'tipo_documento_emp', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.service.loginAut().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
    })  
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

}
