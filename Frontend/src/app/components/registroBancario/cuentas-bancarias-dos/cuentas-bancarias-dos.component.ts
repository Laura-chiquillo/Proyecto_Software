import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CuentaBancaria } from 'src/app/entity/CuentaBancaria';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import { ListaUsiarioService } from 'src/app/service/ListaUsuarioService';
import { Usuario } from 'src/app/entity/Usuario';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;

@Component({
  selector: 'app-cuentas-bancarias-dos',
  templateUrl: './cuentas-bancarias-dos.component.html',
  styleUrls: ['./cuentas-bancarias-dos.component.css']
})
export class CuentasBancariasDOSComponent implements OnInit {
  data: any;
  public listaCuenta: CuentaBancaria[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service: ListaExtrasService) {

  }
  generarPDF(): void {

    pdf.info({
      title: 'Reporte de cuentas bancarias registrados',
      subject: 'Se mostrara la cantida de cuentas bancarias que existen en la base de datos'
    });

    pdf.styles({
      centrado: {
        alignment: 'center'
      }
    });
    pdf.footer(new Txt('SRP technology').color('blue').fontSize(18).alignment('right').end)
    //No agarra la informacion dentro de la tabla quien sea que lea esto se lo encargo :'v//
    new Table([
      this.displayedColumns, this.data
    ]).end
    pdf.add(Table)
    pdf.add(new Txt('Reportes de Cuentas Bancarias').alignment('center').bold().fontSize(24).end)
    pdf.add(pdf.ln(3))
    pdf.create().open();
 

  }
  displayedColumns: string[] = ['id_cuenta', 'num_cuenta', 'nombre_cuenta',
    'saldo_cuenta', 'pais_cuenta', 'acciones'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.service.getCuenta().subscribe(cuenta => {
      this.dataSource = new MatTableDataSource(cuenta);
      this.data = cuenta;
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }

}
