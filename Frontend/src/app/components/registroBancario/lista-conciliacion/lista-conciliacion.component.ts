import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Conciliacion } from 'src/app/entity/Conciliacion';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';

@Component({
  selector: 'app-lista-conciliacion',
  templateUrl: './lista-conciliacion.component.html',
  styleUrls: ['./lista-conciliacion.component.css']
})
export class ListaConciliacionComponent implements OnInit {

  public listaConciliacion: Conciliacion[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: ListaExtrasService) { 

  }

  displayedColumns: string[] = ['id_conciliacion', 'fecha_final', 'saldo_extracto',
  'total_ingresos', 'saldo_final', 'id_cuenta', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  

  ngOnInit(): void {
    this.service.getConciliacion().subscribe(Conciliacion => {
      this.dataSource = new MatTableDataSource(Conciliacion);
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }
  

}
