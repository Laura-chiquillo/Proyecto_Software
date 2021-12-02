import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Conciliacion } from 'src/app/entity/Conciliacion';
import { ListaExtrasService } from 'src/app/service/ListaExtrasService';
import {PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);
const pdf = new PdfMakeWrapper;
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
  'total_ingresos', 'saldo_final', 'id_cuenta'];
  dataSource = new MatTableDataSource<any>();
  data:any;
  generarPDF(): void {

    pdf.info({
      title: 'Reporte de Conciliaciones Bancarias',
      subject: 'Se mostrara la cantida de conciliaciones bancarias que existen en la base de datos'
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
    pdf.add(new Txt('Reportes de Conciliaciones Bancarias').alignment('center').bold().fontSize(24).end)
    pdf.add(pdf.ln(3))
    pdf.create().open();


  }

  ngOnInit(): void {
    this.service.getConciliacion().subscribe(Conciliacion => {
      this.dataSource = new MatTableDataSource(Conciliacion);
      this.data = Conciliacion;
    })
  }
  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }
  

}
