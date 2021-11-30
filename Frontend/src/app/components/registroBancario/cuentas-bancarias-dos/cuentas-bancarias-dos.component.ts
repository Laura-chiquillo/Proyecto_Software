import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';

@Component({
  selector: 'app-cuentas-bancarias-dos',
  templateUrl: './cuentas-bancarias-dos.component.html',
  styleUrls: ['./cuentas-bancarias-dos.component.css']
})
export class CuentasBancariasDOSComponent implements OnInit {

  public listaCuenta: CuentaBancaria[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: ListaExtrasService) {

   }
  displayedColumns: string[] = ['id_cuenta', 'num_cuenta', 'nombre_cuenta',
  'saldo_cuenta', 'pais_cuenta', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.service.getCuenta().subscribe(cuenta => {
      this.dataSource = new MatTableDataSource(cuenta);
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

}
