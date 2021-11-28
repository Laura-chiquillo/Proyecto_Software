import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';

@Component({
  selector: 'app-cuentas-bancarias-dos',
  templateUrl: './cuentas-bancarias-dos.component.html',
  styleUrls: ['./cuentas-bancarias-dos.component.css']
})
export class CuentasBancariasDOSComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() {

   }
  displayedColumns: string[] = ['numero de cuenta', 'nombre del banco', 'tipo de cuenta',
  'saldo', 'pais', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
  }

}
