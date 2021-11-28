import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';

@Component({
  selector: 'app-lista-conciliacion',
  templateUrl: './lista-conciliacion.component.html',
  styleUrls: ['./lista-conciliacion.component.css']
})
export class ListaConciliacionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { 

  }

  displayedColumns: string[] = ['numero', 'fecha', 'Saldo final',
  'Ingresos Bancatios', 'Gastos bancarios', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  

  ngOnInit(): void {
  }
  

}
