import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';
import {PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  usuario: Usuario = new Usuario();
  category: string;
  title: string;
  datos: any;
  generarPDF(): void {

    pdf.info({
      title: 'Reporte de Usuarios registrados',
      subject: 'Se mostrara la cantida de usuarios que existen en la base de datos'
    });

    pdf.styles({
      centrado: {
        alignment: 'center'
      }
    });
    pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('right').end)
    //No agarra la informacion dentro de la tabla quien sea que lea esto se lo encargo :'v//
    new Table([
      this.displayedColumns, this.datos
    ]).end
    pdf.add(Table)
    pdf.add(new Txt('Reportes de Usuarios').alignment('center').bold().fontSize(24).end)
    pdf.add(pdf.ln(3))
    pdf.create().open();


  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public service: ListaUsiarioService) {

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
      this.datos = data;
    })
  }
  actualizar(empleado: any) {
    if (window.confirm("¿Está seguro que desea desbloquear el usuario seleccionado?")) {
      this.usuario = empleado;
      this.service.actualizar(this.usuario).subscribe(
        data => {
          console.log(data)
          alert("Usuario desbloqueado.")
          window.location.reload();
        }
      )
      console.log(this.usuario.estado_emp)
    }
  }

  eliminar(empleado: any) {
    if (window.confirm("¿Está seguro que desea eliminar el usuario seleccionado?")) {
      this.service.eliminar(empleado.id_emp).subscribe(data => {
        alert("Usuario eliminado.")
        window.location.reload()
      })
    }
  }

  estado(es: boolean): String {
    if (es) {
      return "Activo";
    } else {
      return "Inactivo";
    }
  }

  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

  nivel(num: number): String {
    if (num == 1) {
      return "Administrador";
    } else {
      return "Operario";
    }
  }

  funcionalidad(num: number): String {
    if (num == 1) {
      return "Tesorero";
    } else if (num == 2) {
      return "Empleado";
    } else {
      return "Financiero";
    }
  }

}
